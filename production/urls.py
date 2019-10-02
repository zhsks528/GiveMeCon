from django.urls import path, include
from rest_framework import routers
from .views import ProductionViewSet

app_name = "production"

production_router = routers.DefaultRouter()
production_router.register(r"production", ProductionViewSet)

urlpatterns = [path("", include(production_router.urls))]

