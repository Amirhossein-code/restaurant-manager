from rest_framework import serializers
from ..models import ItemFoodValue


class ItemFoodValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemFoodValue
        fields = [
            "id",
            "title",
            "value",
            "unit",
            "item",
        ]
