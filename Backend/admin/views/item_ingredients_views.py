from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from app.models import ItemIngredient
from ..serializers import ItemIngredientAdminSerializer


class ItemIngredientAdminViewSet(ModelViewSet):

    serializer_class = ItemIngredientAdminSerializer
    permission_classes = [IsAdminUser]
    filter_backends = [DjangoFilterBackend]

    def get_queryset(self):
        item_slug = self.kwargs["item_slug"]
        return ItemIngredient.objects.filter(item__slug=item_slug)
