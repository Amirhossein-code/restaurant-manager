from rest_framework import serializers
from ..models import Category


class CategorySerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = [
            "id",
            "title",
            "slug",
            "image",
        ]
        read_only_fields = ["id", "slug"]

    def get_image(self, obj):
        original_url = obj.image.url
        # Construct absolute URL with the current host and port
        absolute_url = f"http://{self.context['request'].get_host()}{original_url}"
        modified_url = absolute_url.replace(":8000/", ":8001/")
        return modified_url
