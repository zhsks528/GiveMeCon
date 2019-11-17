from rest_framework import serializers
from .models import Notification
from users import serializers as users_serializers
from production import serializers as production_serializers

class NotificationSerializer(serializers.ModelSerializer):

    creator = users_serializers.ListUserSerializer()
    production = production_serializers.SmallImageSerializer()

    class Meta:
        model = Notification
        fields = "__all__"