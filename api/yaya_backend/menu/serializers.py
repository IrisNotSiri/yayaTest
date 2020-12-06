from rest_framework import serializers
from menu.models import MenuInfo

#yayaApi Serializer

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuInfo
        fields = '__all__'
