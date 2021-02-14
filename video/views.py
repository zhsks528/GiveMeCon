from rest_framework import viewsets
from .models import Video
from .serializers import VideoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly

class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [AllowAny]

class VideoSearchView(APIView):

    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, category_id):
        video = Video.objects.filter(category__category_id=category_id).order_by('-view')

        serializer = VideoSerializer(video, many=True)

        return Response(serializer.data, status=200)
