from .models import User
from .serializers import ListUserSerializer, UserProfileSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from notifications import views as notifications_views
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView

class ExploreUsers(APIView):

    def get(self, request, format=None):

        last_five = User.objects.all().order_by('-date_joined')[:5]
        
        serializer = ListUserSerializer(last_five, many=True, context={"request": request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class FollowUser(APIView):

    def post(self, request, user_id, forma=None):

        user = request.user

        try:
            user_to_follow = User.objects.get(id=user_id)
        except User.DoexNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
            
        user.following.add(user_to_follow)

        user.save()

        notifications_views.create_notification(user, user_to_follow, 'follow')

        return Response(status=status.HTTP_200_OK)

class UnFollowUser(APIView):

    def post(self, request, user_id, forma=None):
        
        user = request.user

        try:
            user_to_follow = User.objects.get(id=user_id)

        except User.DoexNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user.following.remove(user_to_follow)

        user.save()

        return Response(status=status.HTTP_200_OK)

class UserProfile(APIView):

    def get_user(self, username):

        try :
            found_user = User.objects.get(username=username)
            return found_user
        
        except User.DoesNotExist:
            return None

    def get(self, request, username, format=None):

        found_user = self.get_user(username)

        if found_user is None:
            return Response(status=status.HTTP_404_NOT_FOUNT)

        serializer = UserProfileSerializer(found_user)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def put(self, request, username, format=None):
        
        user = request.user

        found_user = self.get_user(username)

        if found_user is None:
            return Response(status=status.HTTP_404_NOT_FOUNT)
        
        elif found_user.username != user.username:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        else:
            serializer = UserProfileSerializer(found_user, data=request.data, partial=True)

            if serializer.is_valid():
                
                serializer.save()
                
                return Response(data=serializer.data, status=status.HTTP_200_OK)
            
            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserFollowers(APIView):
    
    def get(self, request, username, format=None):

        try:
            found_user = User.objects.get(username=username)
        
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user_followers = found_user.followers.all()

        serializer = ListUserSerializer(user_followers, many=True, context={"request": request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)

class UserFollowing(APIView):
    
    def get(self, request, username, format=None):

        try:
            found_user = User.objects.get(username=username)
        
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user_following = found_user.following.all()

        serializer = ListUserSerializer(user_following, many=True, context={"request": request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)

class Search(APIView):

    def get(self, request, format=None):

        username = request.query_params.get('username', None)

        if username is not None:

            users = User.objects.filter(username__istartswith=username)

            serializer = ListUserSerializer(users, many=True, context={"request": request})

            return Response(data=serializer.data, status=status.HTTP_200_OK)
        
        else:

            return Response(status=status.HTTP_400_BAD_REQUEST)

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter