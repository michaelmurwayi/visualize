from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from .views import *
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'users', UsersViewSet, basename='register')
router.register(r'sites', SiteViewSet, basename='sites')
router.register(r'documents', DocumentViewSet, basename='documents')


urlpatterns = [
    path('token/', obtain_auth_token, name='api_token_auth'),
    path('', include(router.urls)),
]