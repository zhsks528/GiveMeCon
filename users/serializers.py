from rest_framework import serializers
from .models import User
from production import serializers as production_serializers

class ListUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'profile_image', 'username', 'name')


class UserProfileSerializer(serializers.ModelSerializer):

    production = production_serializers.CountImageSerializer(many=True)
    post_count = serializers.ReadOnlyField()
    followers_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()

    class Meta:
        model = User
        fields = ('profile_image', 'username', 'name', 'bio', 'website', 'post_count', 'followers_count', 'following_count', 'production')