from django.db import models
from .item import Item


class ItemIngredients(models.Model):
    """
    Ingredients
    """

    title = models.CharField(max_length=255)
    weight = models.PositiveIntegerField()
    item = models.ForeignKey(Item, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name_plural = "Item Ingredients"
