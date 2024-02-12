from django.contrib import admin
from django.contrib.auth.models import Group

# Unregister the default Group admin
admin.site.unregister(Group)
admin.site.site_header = "مجتمع الماس آذربایجان"
