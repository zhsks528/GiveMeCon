from django.db import models
from category.models import Category

class Channel(models.Model):

    channel_id = models.CharField(max_length=255, null=True, blank=True)
    name = models.CharField(max_length=30)
    keyword = models.CharField(max_length=30, null=True, blank=True)
    subscribers = models.IntegerField(null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    url = models.CharField(max_length=255, null=True, blank=True, default='https://www.youtube.com/channel/')

    def __str__(self):
        return self.name 
