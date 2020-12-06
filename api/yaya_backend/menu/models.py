from django.db import models

# Create your models here.

class MenuInfo(models.Model):
    category = models.CharField(max_length=20)
    name = models.CharField(max_length=20, unique=True)
    price = models.FloatField()
    stock = models.IntegerField()
    ingredient = models.CharField(max_length=200, blank=True)
    description = models.CharField(max_length=400, blank=True)
    onSale = models.BooleanField(default=False)
    publish_at = models.DateTimeField(auto_now_add=True)
    img = models.ImageField(upload_to="covers/%Y/%m/%D", null=True, blank=True)
      

