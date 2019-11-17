from django.urls import path, include
from rest_framework import routers
from .views import Notifications

app_name = "notifications"

urlpatterns = [
    path("", Notifications.as_view())
]
