from rest_framework import serializers
from django.shortcuts import get_object_or_404
from app.models import ItemFoodValue, Item


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
        read_only_fields = [
            "id",
            "item",
        ]

    def create(self, validated_data):
        item_slug = self.context.get("item_slug")
        if item_slug is None:
            raise serializers.ValidationError("item_slug is required in the context")
            # Retrieve the Item instance based on the item_slug
        item = get_object_or_404(Item, slug=item_slug)

        # Set the item field in validated_data to the retrieved Item instance
        validated_data["item"] = item

        # Create the ItemFoodValue instance with the updated validated_data
        return super().create(validated_data)
