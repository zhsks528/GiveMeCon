from django.db import models


class Production(models.Model):

    title = models.CharField(max_length=255)
    content = models.TextField()
    thumnail = models.ImageField(upload_to="images", null=True, blank=True)
    author = models.CharField(max_length=255)
    tag = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']

class ProduceMusic(Production):
    pass


class ProduceSports(Production):
    pass


class ProduceMovies(Production):
    pass


class ProduceGame(Production):
    pass
