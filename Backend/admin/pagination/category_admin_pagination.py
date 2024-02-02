from rest_framework.pagination import PageNumberPagination


class CategoryAdminPagination(PageNumberPagination):
    page_size = 50
