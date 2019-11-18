from rest_framework import serializers
from .models import Video

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ("id", 'title', "view", 'channel', 'thumbnail', 'created_at', 'updated_at', 'video_num', 'topic', 'category', 'url', 'natural_time')
