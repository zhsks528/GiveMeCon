from django.db import models
from channel.models import Channel

class Video(models.Model):
    
    title = models.CharField(max_length=100)
    url = models.CharField(max_length=255, null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    view = models.IntegerField(null=True, blank=True)
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE, null=True, blank=True)
    thumbnail = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True) # 해당 레코드 생성시 현재 시간 자동저장
    updated_at = models.DateTimeField(auto_now=True) # 해당 레코드 갱신시 현재 시간 자동저장

    def __str__(self):
        return self.title
