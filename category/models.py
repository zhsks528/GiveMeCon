from django.db import models

class Category(models.Model):

    category_id = models.IntegerField(null=True, blank=True)
    category_name = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.category_name