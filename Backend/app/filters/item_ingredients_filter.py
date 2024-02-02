import django_filters
from ..models import ItemIngredient


class ItemIngredientsFilter(django_filters.FilterSet):
    class Meta:
        model = ItemIngredient
        fields = {
            "title": ["icontains"],
        }
