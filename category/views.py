from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Category
from .serializers import CategorySerializer

from channel.models import Channel
from channel.serializers import ChannelSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategorySearchView(APIView):

    def get(self, request, category_id):

        channels = Channel.objects.filter(category__category_id=category_id).order_by('-subscribers')
        serializer = ChannelSerializer(channels, many=True)

        return Response(serializer.data, status=200)