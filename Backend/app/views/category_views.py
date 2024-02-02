from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from ..models import Category
from ..serializers import CategorySerializer, SimpleCategorySerializer
from ..filters import CategoryFilter


class CategoryViewSet(ListModelMixin, RetrieveModelMixin, GenericViewSet):
    """ """

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = "slug"
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]
    filterset_class = CategoryFilter

    def get_serializer_class(self):
        if self.action == "retrieve":
            return CategorySerializer
        return SimpleCategorySerializer
