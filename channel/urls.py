from django.urls import path, include
from rest_framework import routers
from .views import ChannelViewSet, ChannelVideoList

app_name = 'channel'

channel_router = routers.DefaultRouter()
channel_router.register(r'channel', ChannelViewSet)

urlpatterns = [
    path('', include(channel_router.urls)),
    path('channel/<int:pk>/videos/', ChannelVideoList.as_view(), name='channel_video_list'),
]