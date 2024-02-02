from django.contrib import admin
from ..models import Category


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["title", "slug", "image"]
    search_fields = ["title", "slug"]
    list_filter = ["title", "slug"]

    class Meta:
        verbose_name_plural = "Categories"
