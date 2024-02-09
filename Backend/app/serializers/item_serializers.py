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
            "image",
        ]
        read_only_fields = ["id", "slug"]


class SimpleItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = [
            "id",
            "title",
            "unit_price",
            "category",
            "slug",
        ]
        read_only_fields = ["id", "slug"]
