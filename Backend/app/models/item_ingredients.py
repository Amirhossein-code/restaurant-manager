from django.db import models
from .item import Item


class ItemIngredient(models.Model):
    """
    Ingredients
    """

    title = models.CharField(max_length=255)
    weight = models.PositiveIntegerField()
    unit = models.CharField(max_length=30, default="گرم")
    item = models.ForeignKey(
        Item, on_delete=models.CASCADE, related_name="item_ingredients"
    )

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name_plural = "Item Ingredients"
