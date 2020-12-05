from rest_framework import serializers
from yayaApi.models import yayaApi

#yayaApi Serializer

class yayaApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = yayaApi
        fields = '__all__'
