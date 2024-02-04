from django.db import models
from common.models import AbstractCategory
from common.utils import custom_slugify


class Category(AbstractCategory):
    image = models.ImageField(upload_to="category_images/", null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.pk is not None:
            old_category = Category.objects.get(pk=self.pk)
            if self.title != old_category.title:
                self.slug = custom_slugify(self.title)

        super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "Categories"
