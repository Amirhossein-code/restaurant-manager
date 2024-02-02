import django_filters
from app.models import Category


class CategoryAdminFilter(django_filters.FilterSet):
    class Meta:
        model = Category
        fields = {
            "title": ["icontains"],
        }
