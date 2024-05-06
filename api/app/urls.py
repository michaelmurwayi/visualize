from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from .views import *
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'register', RegisterViewSet, basename='register')
router.register(r'sites', SiteViewSet, basename='sites')


urlpatterns = [
    path('token/', obtain_auth_token, name='api_token_auth'),
    path('', include(router.urls)),
]