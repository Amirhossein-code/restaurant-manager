import django_filters
from app.models import Item


class ItemAdminFilter(django_filters.FilterSet):
    class Meta:
        model = Item
        fields = {
            "title": ["exact"],
            "category": ["exact"],
            "category__title": ["icontains"],
        }
