from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from ..models import ItemIngredient
from ..serializers import ItemIngredientsSerializer
from ..filters import ItemIngredientsFilter


class ItemIngredientsViewSet(ListModelMixin, RetrieveModelMixin, GenericViewSet):
    """ """

    serializer_class = ItemIngredientsSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ItemIngredientsFilter

    def get_queryset(self):
        item_slug = self.kwargs["item_slug"]
        return ItemIngredient.objects.filter(item__slug=item_slug)
