from django.urls import path, include
from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()

router.register("categories", views.CategoryViewSet, basename="categories")
router.register("items", views.ItemViewSet, basename="items")


urlpatterns = router.urls
