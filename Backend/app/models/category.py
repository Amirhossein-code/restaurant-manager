from django.db import models
from common.models import AbstractCategory


class Category(AbstractCategory):
    image = models.ImageField(upload_to="category_images/", null=True, blank=True)

    class Meta:
        verbose_name_plural = "Categories"
