from rest_framework_nested.routers import NestedDefaultRouter
from rest_framework_nested import routers
from . import views

app_name = "control_center"
router = routers.DefaultRouter()

router.register("items", views.ItemAdminViewSet, basename="items")
router.register("categories", views.CategoryAdminViewSet, basename="categories")

items_router = NestedDefaultRouter(router, "items", lookup="item")
items_router.register(
    "ingredients", views.ItemIngredientAdminViewSet, basename="ingredients"
)
items_router.register(
    "food-values", views.ItemFoodValueAdminViewSet, basename="food-values"
)

urlpatterns = router.urls + items_router.urls
