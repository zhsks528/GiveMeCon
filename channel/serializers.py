from rest_framework import serializers
from .models import Channel
from video.models import Video

class ChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel
        fields = '__all__'

class ChanelVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'