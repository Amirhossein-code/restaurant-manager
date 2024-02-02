from django.db import models
from autoslug import AutoSlugField
from ..utils import custom_slugify


class Category(models.Model):
    title = models.CharField(max_length=355)
    slug = AutoSlugField(
        populate_from="title",
        unique=True,
        slugify=custom_slugify,
    )
    image = models.ImageField(upload_to="category_images/", null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Categories"
