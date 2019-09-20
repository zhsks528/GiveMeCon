from django.db import models

class Channel(models.Model):

    name = models.CharField(max_length=30)
    keyword = models.CharField(max_length=30, null=True, blank=True)
    url = models.CharField(max_length=255, null=True, blank=True)
    subscribers = models.IntegerField()