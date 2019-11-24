from rest_framework import serializers
from .models import Video
from channel.serializers import ChannelSerializer
from category.serializers import CategorySerializer

class VideoSerializer(serializers.ModelSerializer):
    channel = ChannelSerializer()
    category = CategorySerializer(read_only = True)

    class Meta:
        model = Video
        fields = ("id", 'title', "view", 'channel', 'thumbnail', 'created_at', 'updated_at', 'video_num', 'topic', 'category', 'url', 'natural_time')
