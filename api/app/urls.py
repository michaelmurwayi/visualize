from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import UserCreate


urlpatterns = [
    path('token/', obtain_auth_token, name='api_token_auth'),
    path('register/', UserCreate.as_view(), name='user_create'),

]