from rest_framework import serializers
from .models import *

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('firstname', 'lastname', 'email', 'role', 'password')
        extra_kwargs = {'password': {'write_only': True}}

class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = ('name', 'latitude','lomgitude')
        

    