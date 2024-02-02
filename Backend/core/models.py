from django.contrib.auth.models import AbstractUser
from django.db import models
from autoslug import AutoSlugField


# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True)
