from rest_framework import serializers
from app.models import ItemFoodValue


class ItemFoodValueAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemFoodValue
        fields = [
            "id",
            "title",
            "value",
            "unit",
            "item",
        ]
