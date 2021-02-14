from django.urls import path, include
from rest_framework import routers
from .views import ProductionFeed, ProductionDetail, LikeProduction, UnLikeProduction, CommentOnProduction, ModerateComments, CommentDelete, Search

app_name = "production"

urlpatterns = [
    path("", ProductionFeed.as_view()),
    path('<int:item_id>/', ProductionDetail.as_view()),
    path('<int:item_id>/likes/', LikeProduction.as_view()),
    path('<int:item_id>/unlikes/', UnLikeProduction.as_view()),
    path('<int:item_id>/comments/', CommentOnProduction.as_view()),
    path('<int:item_id>/comments/<int:comment_id>/', ModerateComments.as_view()),
    path('comments/<int:comment_id>/', CommentDelete.as_view()),
    path('search/', Search.as_view()),
]
