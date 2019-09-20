from django.urls import path, include
from rest_framework import routers
from .views import ChannelViewSet

app_name = 'channel'

channel_router = routers.DefaultRouter()
channel_router.register(r'channel', ChannelViewSet)

urlpatterns = [
    path('', include(channel_router.urls)),
]