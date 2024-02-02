from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from ..models import Item
from ..serializers import ItemSerializer, SimpleItemSerializer
from ..filters import ItemFilter
from ..pagination import ItemPagination


class ItemViewSet(ListModelMixin, RetrieveModelMixin, GenericViewSet):
    """ """

    queryset = Item.objects.all()
    lookup_field = "slug"
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ItemFilter
    pagination_class = ItemPagination

    def get_serializer_class(self):
        if self.action == "retrieve":
            return ItemSerializer
        return SimpleItemSerializer
