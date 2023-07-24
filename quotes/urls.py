from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from quotes import views
from rest_framework_swagger.views import get_swagger_view

router = routers.DefaultRouter()
router.register(r'quote', views.QuoteView, 'quotes')

schema_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
    path("api/v1/", include(router.urls) ),
    path("docs/", include_docs_urls(title="Spider-Quotes API")),
    path(r'^$', schema_view)
    # path("", views.getData)
]