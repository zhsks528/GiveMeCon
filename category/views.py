from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category
from .serializers import CategorySerializer
from channel.models import Channel
from channel.serializers import ChannelSerializer
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class CategorySearchView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, category_id):

        channels = Channel.objects.filter(category__category_id=category_id).order_by('-subscribers')
        serializer = ChannelSerializer(channels, many=True)

        return Response(serializer.data, status=200)