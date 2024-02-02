from rest_framework import serializers
from ..models import Item


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = [
            "id",
            "title",
            "unit_price",
            "category",
            "slug",
            "description",
            "ingredients",
            "image",
            # "created_at",
            # "last_update",
        ]
        read_only_fields = ["id", "slug"]
