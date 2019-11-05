from rest_framework import viewsets
from .models import Production,ProduceMusic,ProduceSports,ProduceMovies,ProduceGame
from .serializers import ProductionSerializer, ProductionMusicSerializer, ProductionSportsSerializer, ProductionMoviesSerializer,ProductionGameSerializer

class ProductionViewSet(viewsets.ModelViewSet):
    queryset = Production.objects.all()
    serializer_class = ProductionSerializer

class ProductionMusicViewSet(viewsets.ModelViewSet):
    queryset = ProduceMusic.objects.all()
    serializer_class = ProductionMusicSerializer

class ProductionSportsViewSet(viewsets.ModelViewSet):
    queryset = ProduceSports.objects.all()
    serializer_class = ProductionSportsSerializer

class ProductionMoviesViewSet(viewsets.ModelViewSet):
    queryset = ProduceMovies.objects.all()
    serializer_class = ProductionMoviesSerializer
    
class ProductionGameViewSet(viewsets.ModelViewSet):
    queryset = ProduceGame.objects.all()
    serializer_class = ProductionGameSerializer