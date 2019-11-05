from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from rest_framework import permissions
from django.conf.urls.static import static
from django.conf import settings

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
    path("", include("video.urls", namespace="videos")),
    path("", include("channel.urls", namespace="channels")),
    path("production/", include("production.urls", namespace="productions")),
    
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
