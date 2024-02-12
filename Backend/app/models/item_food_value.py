from django.db import models
from .item import Item


class ItemFoodValue(models.Model):
    """
    Food Values
        Carbohidrates , Protein , ...
    """

    title = models.CharField(
        max_length=255,
        verbose_name="نام",
    )
    value = models.PositiveIntegerField(
        verbose_name="ارزش",
    )
    unit = models.CharField(
        max_length=30,
        default="گرم",
        verbose_name="واحد",
    )
    item = models.ForeignKey(
        Item, on_delete=models.CASCADE, related_name="item_food_values"
    )

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name_plural = "ارزش های غذایی"
