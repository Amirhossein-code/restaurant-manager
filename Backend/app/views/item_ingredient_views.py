from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from ..models import ItemIngredient
from ..serializers import ItemIngredientSerializer
from ..filters import ItemIngredientFilter


class ItemIngredientViewSet(ListModelMixin, RetrieveModelMixin, GenericViewSet):

    serializer_class = ItemIngredientSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ItemIngredientFilter

    def get_queryset(self):
        item_slug = self.kwargs["item_slug"]
        return ItemIngredient.objects.filter(item__slug=item_slug)
