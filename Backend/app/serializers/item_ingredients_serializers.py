from rest_framework import serializers
from ..models import ItemIngredients


class ItemIngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemIngredients
        fields = [
            "id",
            "title",
            "weight",
            "item",
        ]
