import django_filters
from ..models import ItemFoodValue


class ItemFoodValuesFilter(django_filters.FilterSet):
    class Meta:
        model = ItemFoodValue
        fields = {
            "title": ["icontains"],
        }
