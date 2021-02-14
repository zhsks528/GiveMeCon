from django.contrib.auth.models import AbstractUser
from django.urls import reverse
from django.db import models
from django.utils.translation import ugettext_lazy as _

class User(AbstractUser):

    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
        ('not-specified', 'Not specified')
    )

    profile_image = models.ImageField(null=True)
    name = models.CharField(_('Name of User'), blank=True, max_length=255)
    website = models.URLField(null=True, blank=True,)
    bio = models.TextField(null=True, blank=True,)
    phone = models.CharField(max_length=140, null=True, blank=True,)
    gender = models.CharField(max_length=80, choices=GENDER_CHOICES, null=True, blank=True,)
    followers = models.ManyToManyField("self", blank=True)
    following = models.ManyToManyField("self", blank=True)

    
    def __str__(self):
        return self.username

    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})

    @property
    def post_count(self):
        return self.production.all().count()

    @property
    def followers_count(self):
        return self.followers.all().count()

    @property
    def following_count(self):
        return self.following.all().count()