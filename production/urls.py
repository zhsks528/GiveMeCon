from django.urls import path, include
from rest_framework import routers
from .views import ProductionViewSet
from django.conf.urls.static import static
from django.conf import settings

app_name = "production"

production_router = routers.DefaultRouter()
production_router.register(r"production", ProductionViewSet)

urlpatterns = [path("", include(production_router.urls))] + static(
    settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
)

