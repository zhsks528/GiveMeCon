from django.urls import path, include
from rest_framework import routers
from .views import CategoryViewSet

app_name = "category"

category_router = routers.DefaultRouter()
category_router.register(r"", CategoryViewSet)

urlpatterns = [
    path("", include(category_router.urls))
]
