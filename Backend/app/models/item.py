from django.db import models
from autoslug import AutoSlugField
from common.utils import custom_slugify, round_to_nearest_hundred
from .category import Category


class Item(models.Model):
    """
    coffe : 255,555
    """

    YES = "YES"
    NO = ""

    AVAILABILITY_CHOICES = [
        (YES, "موجود"),
        (NO, "عدم موجودی"),
    ]
    title = models.CharField(
        max_length=255,
        verbose_name="نام",
    )
    unit_price = models.PositiveIntegerField(
        verbose_name="قیمت",
    )

    slug = AutoSlugField(
        populate_from="title",
        unique=True,
        slugify=custom_slugify,
        null=True,
        blank=True,
        editable=True,
        verbose_name="کد شماره صفحه",
    )

    description = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name="توضیحات",
    )
    image = models.ImageField(
        upload_to="item_images/",
        null=True,
        blank=True,
        verbose_name="عکس",
    )
    available = models.CharField(
        max_length=3,
        choices=AVAILABILITY_CHOICES,
        default=YES,
        verbose_name="وضعیت موجودی",
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="item_category",
        verbose_name="طبقه بندی",
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="زمان ایجاد",
    )
    last_update = models.DateTimeField(
        auto_now=True,
        verbose_name="زمان آخرین ویرایش",
    )

    def __str__(self) -> str:
        return self.title

    def save(self, *args, **kwargs):
        # Check if the title has changed
        if self.pk is not None:  # Check if the instance is already saved
            old_item = Item.objects.get(pk=self.pk)
            if self.title != old_item.title:
                # Regenerate the slug based on the updated title
                self.slug = custom_slugify(self.title)

        self.unit_price = round_to_nearest_hundred(self.unit_price)
        super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "آیتم ها"
        verbose_name = "آیتم"
