from django.urls import path, include
from rest_framework_nested import routers
from rest_framework_nested.routers import NestedDefaultRouter
from . import views

router = routers.DefaultRouter()

router.register("categories", views.CategoryViewSet, basename="categories")
router.register("items", views.ItemViewSet, basename="items")

items_router = NestedDefaultRouter(router, "items", lookup="item")
items_router.register(
    "ingredients", views.ItemIngredientsViewSet, basename="ingredients"
)
items_router.register(
    "food-values", views.ItemFoodValuesViewSet, basename="food-values"
)


urlpatterns = router.urls + items_router.urls
