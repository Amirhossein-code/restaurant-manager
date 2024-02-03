from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from ..models import ItemFoodValue
from ..serializers import ItemFoodValueSerializer
from ..filters import ItemFoodValueFilter


class ItemFoodValueViewSet(ListModelMixin, RetrieveModelMixin, GenericViewSet):

    serializer_class = ItemFoodValueSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ItemFoodValueFilter

    def get_queryset(self):
        item_slug = self.kwargs["item_slug"]
        return ItemFoodValue.objects.filter(item__slug=item_slug)
