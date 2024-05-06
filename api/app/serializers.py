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
        
class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ('site', 'file', 'file_type', 'uploaded_by','uploaded_at')    