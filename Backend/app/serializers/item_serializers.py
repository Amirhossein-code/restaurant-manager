from rest_framework import serializers
from ..models import Item


class ItemSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = [
            "id",
            "title",
            "unit_price",
            "category",
            "slug",
            "available",
            "description",
            "image",
        ]
        read_only_fields = ["id", "slug"]

    def get_image(self, obj):
        # Assuming obj.image contains the original image URL
        original_url = obj.image.url
        # Replace port 8000 with port 8001
        modified_url = original_url.replace(":8000/", ":8001/")
        return modified_url

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
