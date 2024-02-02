from rest_framework import serializers
from ..models import ItemIngredient


class ItemIngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemIngredient
        fields = [
            "id",
            "title",
            "weight",
            "unit",
            "item",
        ]
