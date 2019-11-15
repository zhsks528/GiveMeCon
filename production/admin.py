from django.contrib import admin
from .models import Production, Image, Comment, Like

class ProductionAdmin(admin.ModelAdmin):
    
    list_display = ('id', 'title', 'creator')

admin.site.register(Production, ProductionAdmin)

class ImageAdmin(admin.ModelAdmin):
    
    list_display = ('id', 'post', 'file')
    
admin.site.register(Image, ImageAdmin)

class CommentAdmin(admin.ModelAdmin):
    
    list_display = ('id', 'creator', 'message', 'created_at', 'updated_at')

admin.site.register(Comment, CommentAdmin)

class LikeAdmin(admin.ModelAdmin):

    list_display = ('id', 'creator', 'post')

admin.site.register(Like, LikeAdmin)


