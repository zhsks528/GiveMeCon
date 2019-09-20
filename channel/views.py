from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Channel
from .serializers import ChannelSerializer, ChanelVideoSerializer

class ChannelViewSet(viewsets.ModelViewSet):
    queryset = Channel.objects.all()
    serializer_class = ChannelSerializer

class ChannelVideoList(APIView):

    def get(self, request, pk, format=None):
        channel = Channel.objects.get(id=pk)
        videos = channel.video_set.all()
        serializer = ChanelVideoSerializer(videos, many=True)
        
        return Response(data=serializer.data, status=200) 