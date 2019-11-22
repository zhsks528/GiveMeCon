from rest_framework import viewsets
from .models import Video
from .serializers import VideoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
	
class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

class VideoDetail(APIView):

    def get(self, request):

        query_result = request.GET.get('v', "")
        video = get_object_or_404(Video, video_num=query_result)
        serializer = VideoSerializer(video)
        return Response(serializer.data, status=200)

class VideoSearchView(APIView):

    def get(self, request, category_id):
        video = Video.objects.filter(category__category_id=category_id)

        serializer = VideoSerializer(video, many=True)

        return Response(serializer.data, status=200)