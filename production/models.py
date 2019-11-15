from django.db import models
from category.models import Category
from users import models as user_models
from category import models as category_models
from taggit.managers import TaggableManager
from django.contrib.humanize.templatetags.humanize import naturaltime

class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Production(TimeStampedModel):

    """ 게시글 테이블 """

    category = models.ForeignKey(category_models.Category, on_delete=models.CASCADE, null=True, related_name='category')
    title = models.CharField(max_length=255)
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True, related_name='production')
    content = models.TextField()
    tags = TaggableManager(blank = True)

    class Meta:
        ordering = ['-created_at']
        
    @property
    def likes_count(self):
        return self.likes.all().count()

    @property
    def comments_count(self):
        return self.comments.all().count()

    @property
    def natural_time(self):
        return  naturaltime(self.created_at)
        
    def __str__(self):
        return self.title


class Image(TimeStampedModel):
    post = models.ForeignKey(Production, on_delete=models.CASCADE, null=True, related_name='images')
    file = models.ImageField(blank=True)

    def __str__(self):
        return '{} - {}'.format(self.post, self.file)


class Comment(TimeStampedModel):

    """ 댓글 테이블 """

    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)
    message = models.TextField()
    post = models.ForeignKey(Production, on_delete=models.CASCADE, null=True, related_name='comments')

    def __str__(self):
        return '{} - {}'.format(self.creator, self.message)


class Like(TimeStampedModel):

    """ 좋아요 테이블 """

    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)
    post = models.ForeignKey(Production, on_delete=models.CASCADE, null=True, related_name='likes')

    def __str__(self):
        return '{} - {}'.format(self.creator, self.post)


