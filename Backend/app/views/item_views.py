from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from ..models import Item
from ..serializers import ItemSerializer


class ItemViewSet(ListModelMixin, RetrieveModelMixin, GenericViewSet):
    """ """

    queryset = Item.objects.all()
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]

    def get_serializer_class(self):
        if self.action == "list":
            return ItemSerializer
        return ItemSerializer
