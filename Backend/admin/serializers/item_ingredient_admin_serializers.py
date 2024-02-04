from rest_framework import serializers
from app.models import ItemIngredient


class ItemIngredientAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemIngredient
        fields = [
            "id",
            "title",
            "weight",
            "unit",
            "item",
        ]
        read_only_fields = ["id"]
