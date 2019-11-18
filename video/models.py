from django.db import models
from channel.models import Channel
from category.models import Category
from django.contrib.humanize.templatetags.humanize import naturaltime

class Video(models.Model):
    
    title = models.CharField(max_length=100)
    view = models.IntegerField(null=True, blank=True)
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE, null=True, blank=True)
    thumbnail = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True) # 해당 레코드 생성시 현재 시간 자동저장
    updated_at = models.DateTimeField(auto_now=True) # 해당 레코드 갱신시 현재 시간 자동저장
    video_num = models.CharField(max_length=255, blank=True, null=True)
    topic = models.CharField(max_length=255, null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    url = models.CharField(max_length=255, null=True, blank=True, default='https://www.youtube.com/watch?v=')
    
    def __str__(self):
        return self.title

    @property
    def natural_time(self):
        return  naturaltime(self.created_at)