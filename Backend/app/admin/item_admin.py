from django.contrib import admin
from ..models import Item


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = [
        "title",
        "unit_price",
        "category",
        "created_at",
        "last_update",
    ]
    search_fields = [
        "title",
        "category__title",
    ]
    list_filter = [
        "category",
        "created_at",
        "last_update",
    ]
