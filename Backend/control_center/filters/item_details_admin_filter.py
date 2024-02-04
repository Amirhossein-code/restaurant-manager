import django_filters
from app.models import ItemFoodValue, ItemIngredient


class ItemFoodValueAdminFilter(django_filters.FilterSet):
    class Meta:
        model = ItemFoodValue
        fields = {
            "title": ["icontains"],
        }


class ItemIngredientAdminFilter(django_filters.FilterSet):
    class Meta:
        model = ItemIngredient
        fields = {
            "title": ["icontains"],
        }
