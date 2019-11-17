from django.urls import path, include
from rest_framework import routers
from .views import ExploreUsers, FollowUser, UnFollowUser, UserProfile, UserFollowers, UserFollowing, Search, FacebookLogin

app_name = "users"

urlpatterns = [
    path("explore/", ExploreUsers.as_view()),
    path("<int:user_id>/follow/", FollowUser.as_view()),
    path("<int:user_id>/unfollow/", UnFollowUser.as_view()),
    path("<username>/followers/", UserFollowers.as_view()),
    path("<username>/following/", UserFollowing.as_view()),
    path("search/", Search.as_view()),
    path("<username>/", UserProfile.as_view()),
    path("login/facebook/", FacebookLogin.as_view())
]
