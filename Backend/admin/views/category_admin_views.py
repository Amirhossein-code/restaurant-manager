from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser
from django_filters.rest_framework import DjangoFilterBackend
from app.models import Category
from ..serializers import CategoryAdminSerializer
from ..filters import CategoryAdminFilter
from ..pagination import CategoryAdminPagination


class CategoryAdminViewSet(ModelViewSet):
    """ """

    queryset = Category.objects.all()
    serializer_class = CategoryAdminSerializer
    lookup_field = "slug"

    # permission_classes = [IsAdminUser]
    filter_backends = [DjangoFilterBackend]
    filterset_class = CategoryAdminFilter
    pagination_class = CategoryAdminPagination
