from rest_framework import viewsets
from .models import Production
from .serializers import ProductionSerializer


class ProductionViewSet(viewsets.ModelViewSet):
    queryset = Production.objects.all()
    serializer_class = ProductionSerializer
