
from django.shortcuts import render, HttpResponse
import random
from . import models


def index(request):
    name = "trousers"
    description = "blue trousers"
    price = 100
    new_item = models.Item.objects.create(name=name, description=description, price=price)
    # создать объект в переменной и отдельно сохранить
    new_item = models.Item()
    new_item.name = name
    new_item.description = description
    new_item.price = price
    
    new_item.save()
    return HttpResponse(f'New item created: {new_item.name} - {new_item.description} - {new_item.price}')