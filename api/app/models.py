from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from .managers import CustomUserManager

# Create your models here.
class Site(models.Model):
    name = models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)



class CustomUser(AbstractBaseUser):
    ROLE_CHOICES = [
        ('client', 'Client'),
        ('manager', 'Manager'),
        ('admin', 'Admin'),
    ]

    firstname = models.CharField(max_length=30, blank=False)
    lastname = models.CharField(max_length=30, blank=False)
    email = models.EmailField(unique=True)
    site = models.ForeignKey(Site, on_delete=models.PROTECT, null=True, blank=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email


class Document(models.Model):
    TYPE = [
        ("report", "Report"),
        ("inventory","Inventory"),
        ("invoice","Invoice"),
        ("images","Images"),
        ("pdq", "PDQ"),
        ("others","Others"),
    ]
    site = models.ForeignKey(Site, on_delete=models.CASCADE)
    file = models.FileField(upload_to="documents", null=True)
    file_type = models.CharField(max_length=20, choices=TYPE)
    uploaded_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    uploaded_at = models.DateTimeField(auto_now_add=True)
