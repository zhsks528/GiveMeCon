from rest_framework import serializers
from .models import User
from production import serializers as production_serializers
from rest_framework.authtoken.models import Token
from rest_auth.models import TokenModel


class ListUserSerializer(serializers.ModelSerializer):

    # following = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            "id",
            "profile_image",
            "username",
            "name",
            # "following"
        )

    def get_following(self, obj):
        if "request" in self.context:
            request = self.context["request"]
            if obj in request.user.following.all():
                return True
        return False


class UserProfileSerializer(serializers.ModelSerializer):

    production = production_serializers.CountImageSerializer(many=True)
    post_count = serializers.ReadOnlyField()
    followers_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()

    class Meta:
        model = User
        fields = (
            "profile_image",
            "username",
            "name",
            "bio",
            "website",
            "post_count",
            "followers_count",
            "following_count",
            "production",
        )


class TokenSerializer(serializers.ModelSerializer):
    user = production_serializers.FeedUserSerializer()

    class Meta:
        model = Token
        fields = ("key", "user")

