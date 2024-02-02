import django_filters
from ..models import ItemFoodValue


class ItemFoodValueFilter(django_filters.FilterSet):
    class Meta:
        model = ItemFoodValue
        fields = {
            "title": ["icontains"],
        }
