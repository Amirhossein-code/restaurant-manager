from django.urls import path, include
from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()

router.register("items", views.ItemAdminViewSet, basename="items")
router.register("categories", views.CategoryAdminViewSet, basename="categories")


urlpatterns = router.urls
