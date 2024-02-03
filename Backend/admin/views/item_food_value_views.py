from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from app.models import ItemFoodValue
from ..serializers import ItemFoodValueAdminSerializer


class ItemFoodValueAdminViewSet(ModelViewSet):

    serializer_class = ItemFoodValueAdminSerializer
    # permission_classes = [IsAdminUser]
    filter_backends = [DjangoFilterBackend]
    # filterset_class = ItemFoodValueFilter

    def get_queryset(self):
        item_slug = self.kwargs["item_slug"]
        return ItemFoodValue.objects.filter(item__slug=item_slug)
