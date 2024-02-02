from django.db import models
from .item import Item


class ItemFoodValue(models.Model):
    """
    Food Values
        Carbohidrates , Protein , ...
    """

    title = models.CharField(max_length=255)
    value = models.PositiveIntegerField()
    item = models.ForeignKey(Item, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name_plural = "Item Food Values"
