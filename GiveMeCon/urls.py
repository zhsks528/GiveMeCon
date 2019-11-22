from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from rest_framework import permissions
from django.conf.urls.static import static
from django.conf import settings
# from rest_framework_jwt.views import obtain_jwt_token
from django.contrib.auth import views as auth_views

# API 문서화
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Creator Help Web Service API",
        default_version="v1",
        description="1인 미디어 창작자들을 위한 API",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("rest-auth/", include('rest_auth.urls')),
    path("rest-auth/registration/", include('rest_auth.registration.urls')),
    path("video/", include("video.urls", namespace="videos")),
    path("", include("channel.urls", namespace="channels")),
    path("users/", include("users.urls", namespace="users")),
    path("production/", include("production.urls", namespace="productions")),
    path("notifications/", include("notifications.urls", namespace="notifications")),
    path("category/", include("category.urls", namespace="category")),
    
    # Auto DRF API docs
    url(
        r"^swagger(?P<format>\.json|\.yaml)$",
        schema_view.without_ui(cache_timeout=0),
        name="schema-json",
    ),
    url(
        r"^swagger/$",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    url(
        r"^redoc/$", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"
    ),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
