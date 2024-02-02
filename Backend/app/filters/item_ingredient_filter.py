import django_filters
from ..models import ItemIngredient


class ItemIngredientFilter(django_filters.FilterSet):
    class Meta:
        model = ItemIngredient
        fields = {
            "title": ["icontains"],
        }
