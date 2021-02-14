from .models import Production, Comment, Like
from .serializers import (
    ProductionSerializer,
    CommentSerializer,
    LikeSerializer,
    CountImageSerializer,
    InputProductionSerializer,
)
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from notifications import views as notifications_views
from users import models as users_models
from users import serializers as users_serializers
from category import models as category_models
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly

class ProductionFeed(APIView):

    """ 프로듀싱에 올라온 전체 글을 가져옴 """

    permission_classes = [IsAuthenticatedOrReadOnly]
    
    def get(self, request, format=None):

        all_production = Production.objects.all()

        serializer = ProductionSerializer(
            all_production, many=True, context={"request": request}
        )

        return Response(data=serializer.data)

    """ 프로듀싱 글쓰기 """

    def post(self, request, format=None):

        user = request.user

        category = request.data["category"]
        category_id = category_models.Category.objects.get(category_id=category)

        serializer = InputProductionSerializer(data=request.data)

        if serializer.is_valid():

            serializer.save(creator=user, category=category_id)

            return Response(data=serializer.data, status=status.HTTP_201_CREATED)

        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
class ProductionDetail(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def find_own_production(self, item_id, user):
        try:
            production = Production.objects.get(id=item_id, creator=user)

            return production
        except Production.DoesNotExist:
            return None

    def get(self, request, item_id, format=None):

        user = request.user

        try:
            production = Production.objects.get(id=item_id)

        except Production.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ProductionSerializer(production, context={"request": request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def put(self, request, item_id, format=None):

        user = request.user

        production = self.find_own_production(item_id, user)

        if production is None:

            return Response(status=status.HTTP_400_BAD_REQUEST)

        serializer = InputProductionSerializer(
            production, data=request.data, partial=True
        )

        if serializer.is_valid():

            serializer.save(creator=user)

            return Response(data=serializer.data, status=status.HTTP_204_NO_CONTENT)

        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, item_id, format=None):

        user = request.user

        production = self.find_own_production(item_id, user)

        if production in None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        production.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)

class LikeProduction(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, item_id, format=None):

        likes = Like.objects.filter(post__id=item_id)

        like_creators_ids = likes.values("creator_id")

        users = users_models.User.objects.filter(id__in=like_creators_ids)
        
        serializer = users_serializers.ListUserSerializer(
            users, many=True, context={"request": request}
        )

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, item_id, format=None):

        user = request.user

        try:
            found_production = Production.objects.get(id=item_id)

        except Production.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        try:
            preexisiting_like = Like.objects.get(creator=user, post=found_production)

            return Response(status=status.HTTP_304_NOT_MODIFIED)

        except Like.DoesNotExist:

            new_like = Like.objects.create(creator=user, post=found_production)

            new_like.save()

            notifications_views.create_notification(
                user, found_production.creator, "like", found_production
            )

            return Response(status=status.HTTP_201_CREATED)

class UnLikeProduction(APIView):
    
    permission_classes = [IsAuthenticatedOrReadOnly]

    def delete(self, request, item_id, format=None):
        user = request.user

        try:
            found_production = Production.objects.get(id=item_id)

        except Production.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        try:
            preexisiting_like = Like.objects.get(creator=user, post=found_production)

            preexisiting_like.delete()

            return Response(status=status.HTTP_204_NO_CONTENT)

        except Like.DoesNotExist:

            return Response(status=status.HTTP_304_NOT_MODIFIED)

class CommentOnProduction(APIView):

    permission_classes = [IsAuthenticatedOrReadOnly]

    def post(self, request, item_id, format=None):

        user = request.user

        try:
            found_production = Production.objects.get(id=item_id)
        except Production.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = CommentSerializer(data=request.data)

        if serializer.is_valid():

            serializer.save(creator=user, post=found_production)

            notifications_views.create_notification(
                user,
                found_production.creator,
                "comment",
                found_production,
                serializer.data["message"],
            )

            return Response(data=serializer.data, status=status.HTTP_201_CREATED)

        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommentDelete(APIView):

    permission_classes = [IsAuthenticated]

    """ 자기 댓글 삭제 API """

    def delete(self, request, comment_id, format=None):

        user = request.user

        try:
            found_comment = Comment.objects.get(id=comment_id, creator=user)
            found_comment.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        except Comment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class Search(APIView):

    permission_classes = [AllowAny]

    def get(self, request, format=None):

        hashtags = request.query_params.get("hashtags", None)

        if hashtags is not None:

            hashtags = hashtags.split(",")

            production = Production.objects.filter(tags__name__in=hashtags).distinct()

            serializer = CountImageSerializer(production, many=True)

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        else:

            return Response(status=status.HTTP_400_BAD_REQUEST)

class ModerateComments(APIView):

    permission_classes = [IsAuthenticated]
    """ 자기가 올린 글에 대한 댓글 삭제 권한 API """

    def delete(self, request, item_id, comment_id, format=None):

        user = request.user

        try:
            comment_to_delete = Comment.objects.get(
                id=comment_id, post__id=item_id, post__creator=user
            )
            comment_to_delete.delete()

        except Comment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_204_NO_CONTENT)
