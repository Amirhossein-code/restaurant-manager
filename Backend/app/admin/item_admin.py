from django.contrib import admin
from ..models import Item, ItemIngredient, ItemFoodValue


class ItemIngredientsInline(admin.TabularInline):
    model = ItemIngredient


class ItemFoodValueInline(admin.TabularInline):
    model = ItemFoodValue


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    inlines = [
        ItemIngredientsInline,
        ItemFoodValueInline,
    ]
    list_display = [
        "title",
        "unit_price",
        "category",
        "slug",
        "last_update",
        "available",
    ]
    search_fields = [
        "title",
        "category__title",
    ]
    list_filter = [
        "category",
        "created_at",
        "last_update",
        "available",
    ]
    fields = [
        "title",
        "unit_price",
        "slug",
        "description",
        "image",
        "category",
        "available",
        "created_at",
        "last_update",
    ]
    readonly_fields = ["created_at", "last_update", "slug"]
