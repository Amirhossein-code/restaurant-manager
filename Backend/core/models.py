from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models


class CustomUserManager(BaseUserManager):
    """
    Since the User model Does not have an Email field which is expected we need to create
    a Custome user manager to remove the email field from the BaseUserManager By Overriding it with
    this class
    """

    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError("The Username field must be set")
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(username, password, **extra_fields)


class User(AbstractUser):
    """
    User Model has been customized to support username and password
    and optionally first name and last name  and other user related fields
    """

    email = None
    REQUIRED_FIELDS = []
    USERNAME_FIELD = "username"

    objects = CustomUserManager()

    def __str__(self):
        return self.username
