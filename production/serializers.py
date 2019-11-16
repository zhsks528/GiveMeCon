from rest_framework import serializers
from .models import Production, Image, Comment, Like
from users import models as user_models
from category import models as category_models
from taggit_serializer.serializers import (TagListSerializerField, TaggitSerializer)

class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = "__all__"

class SmallImageSerializer(serializers.ModelSerializer):

    """ User is Notifications """

    images = ImageSerializer(many=True)
    
    class Meta:
        model = Production
        fields = ("images",)

class CountImageSerializer(serializers.ModelSerializer):

    images = ImageSerializer(many=True)
    
    class Meta:
        model = Production
        fields = ('id', 'images', 'comments_count', 'likes_count')

class FeedUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = user_models.User
        fields = ('username', 'profile_image')


class CommentSerializer(serializers.ModelSerializer):
    
    creator = FeedUserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'message', 'creator')


class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Like
        fields = ('creator',)


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = category_models.Category
        fields = ('id', 'category_name')


class ProductionSerializer(serializers.ModelSerializer):

    creator = FeedUserSerializer()
    images = ImageSerializer(many=True)
    comments = CommentSerializer(many=True)
    category = CategorySerializer()
    tags = TagListSerializerField()
    is_liked = serializers.SerializerMethodField()

    class Meta:
        model = Production
        fields = ("id", 'category', "title", 'creator', 'images', 'thumbnail', 'content', 'comments', 'likes_count', 'comments_count', 'tags', 'natural_time', 'is_liked')

    def get_is_liked(self, obj):
        if 'request' in self.context:
            request = self.context['request']

            try:
                Like.objects.get(creator__id=request.user.id, post__id=obj.id)
                return True
            except Like.DoesNotExist:
                return False
        
        return False

class InputProductionSerializer(serializers.ModelSerializer):

    creator = FeedUserSerializer(read_only=True)
    category = CategorySerializer(read_only=True)
    # tags = TagListSerializerField()
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Production
        fields = ('category', 'title', 'creator', 'images', 'content', 'thumbnail')

    # def create(self, validated_data):
    #     images_data = validated_data.pop('images')
    #     print(images_data)

