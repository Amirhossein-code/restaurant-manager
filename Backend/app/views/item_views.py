from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from ..models import Item
from ..serializers import ItemSerializer
from ..filters import ItemFilter
from ..pagination import ItemPagination


class ItemViewSet(ListModelMixin, RetrieveModelMixin, GenericViewSet):

    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    lookup_field = "slug"
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ItemFilter
    pagination_class = ItemPagination

