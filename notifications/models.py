from django.db import models
from users import models as user_models
from production import models as production_models

class Notification(production_models.TimeStampedModel):

    TYPE_CHOICES = (
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow'),
    )

    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, related_name='creator')
    to = models.ForeignKey(user_models.User, on_delete=models.CASCADE, related_name='to')
    notification_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    production = models.ForeignKey(production_models.Production, on_delete=models.CASCADE, null=True, blank=True, related_name='production')
    comment = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return 'From : {} - To : {}'.format(self.creator, self.to)