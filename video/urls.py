from django.urls import path, include
from rest_framework import routers
from .views import VideoViewSet, VideoDetail

app_name = 'video'

video_router = routers.DefaultRouter()
video_router.register(r'video', VideoViewSet)

urlpatterns = [
    path('', include(video_router.urls)),
]
