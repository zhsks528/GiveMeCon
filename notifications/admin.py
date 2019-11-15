from django.contrib import admin
from .models import Notification

class NotificationAdmin(admin.ModelAdmin):

    list_display = ('creator','to', 'notification_type')

admin.site.register(Notification, NotificationAdmin)
