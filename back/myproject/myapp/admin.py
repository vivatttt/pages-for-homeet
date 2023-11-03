from django.contrib import admin
from . import models

class ItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'price')
    list_filter = ('is_active', 'price')
    search_fields = ('name', 'description')
    list_display_links = ('id', 'name')

admin.site.register(models.Item)