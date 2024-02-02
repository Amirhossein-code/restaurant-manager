from rest_framework import serializers
from app.models import Item


class ItemAdminSerializer(serializers.ModelSerializer):
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
            "created_at",
            "last_update",
        ]
        read_only_fields = ["id", "slug"]
