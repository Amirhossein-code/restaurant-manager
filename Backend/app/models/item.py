from django.db import models
from autoslug import AutoSlugField
from common.utils import custom_slugify, round_to_nearest_thousand
from .category import Category


class Item(models.Model):
    """
    coffe : 255,555
    """

    title = models.CharField(max_length=255)
    unit_price = models.PositiveIntegerField()

    slug = AutoSlugField(
        populate_from="title",
        unique=True,
        slugify=custom_slugify,
        null=True,
        blank=True,
        editable=True,
    )

    description = models.CharField(max_length=255, null=True, blank=True)
    calorie = models.PositiveIntegerField(null=True, blank=True)
    image = models.ImageField(upload_to="item_images/", null=True, blank=True)
    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, related_name="item_category"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title

    def save(self, *args, **kwargs):
        self.unit_price = round_to_nearest_thousand(self.unit_price)
        super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "Items"
