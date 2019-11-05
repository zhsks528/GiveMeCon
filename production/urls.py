from django.urls import path, include
from rest_framework import routers
from .views import ProductionViewSet, ProductionMusicViewSet, ProductionSportsViewSet, ProductionMoviesViewSet, ProductionGameViewSet

app_name = "production"

production_router = routers.DefaultRouter()
production_router.register(r"total", ProductionViewSet)
production_router.register(r"music", ProductionMusicViewSet)
production_router.register(r"sports", ProductionSportsViewSet)
production_router.register(r"movies", ProductionMoviesViewSet)
production_router.register(r"games", ProductionGameViewSet)


urlpatterns = [
    path("", include(production_router.urls))
]
