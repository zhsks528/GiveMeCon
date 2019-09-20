from django.db import models
from video.models import Video

class WordCount(models.Model):

    word_name = models.CharField(max_length=100, null=True, blank=True)
    video = models.ForeignKey(Video, on_delete=models.CASCADE)

    def __str__(self):
        return self.word_name 