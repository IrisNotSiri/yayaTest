from yayaApi.models import yayaApi
from rest_framework import viewsets, permissions
from .serializers import yayaApiSerializer


#yayaApi
class yayaViewSet(viewsets.ModelViewSet):
    queryset = yayaApi.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = yayaApiSerializer