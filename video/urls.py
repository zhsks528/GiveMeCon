from django.urls import path, include
from rest_framework import routers
from .views import VideoViewSet, VideoSearchView

app_name = 'video'

video_router = routers.DefaultRouter()
video_router.register(r'', VideoViewSet)

urlpatterns = [
    path('', include(video_router.urls)),
    path("<int:category_id>/search/", VideoSearchView.as_view()),
]
