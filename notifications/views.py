from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Notification
from .serializers import NotificationSerializer

class Notifications(APIView):

    def get(self, request, format=None):

        user = request.user

        notifications = Notification.objects.filter(to=user)

        serializer = NotificationSerializer(notifications, many=True)

        return Response(data=serializer.data , status=status.HTTP_200_OK)


def create_notification(creator, to, notification_type, production = None, comment =None):

    notification = Notification.objects.create(
        creator = creator,
        to=to,
        notification_type=notification_type,
        production=production,
        comment=comment
    )

    notification.save()