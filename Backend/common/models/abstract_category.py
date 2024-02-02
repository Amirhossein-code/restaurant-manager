from django.db import models
from autoslug import AutoSlugField
from common.utils import custom_slugify


class AbstractCategory(models.Model):
    title = models.CharField(max_length=355)
    slug = AutoSlugField(
        populate_from="title",
        unique=True,
        slugify=custom_slugify,
        blank=True,
        null=True,
    )

    def __str__(self):
        return self.title

    class Meta:
        abstract = True
