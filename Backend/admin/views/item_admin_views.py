from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser
from django_filters.rest_framework import DjangoFilterBackend
from app.models import Item
from ..serializers import ItemAdminSerializer
from ..filters import ItemAdminFilter
from ..pagination import ItemAdminPagination


class ItemAdminViewSet(ModelViewSet):
    """ """

    queryset = Item.objects.all()
    serializer_class = ItemAdminSerializer
    lookup_field = "slug"

    permission_classes = [IsAdminUser]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ItemAdminFilter
    pagination_class = ItemAdminPagination
