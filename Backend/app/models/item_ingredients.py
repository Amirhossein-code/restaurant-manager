from django.db import models
from .item import Item


class ItemIngredient(models.Model):
    """
    Ingredients
    """

    title = models.CharField(
        max_length=255,
        verbose_name="نام",
    )
    weight = models.PositiveIntegerField(
        verbose_name="وزن",
    )
    unit = models.CharField(
        max_length=30,
        default="گرم",
        verbose_name="واحد",
    )
    item = models.ForeignKey(
        Item, on_delete=models.CASCADE, related_name="item_ingredients"
    )

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name_plural = "مواد غذایی"
        verbose_name = "ماده غذایی"
