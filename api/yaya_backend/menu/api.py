from menu.models import MenuInfo
from rest_framework import viewsets, permissions
from .serializers import MenuSerializer


#yayaApi
class MenuViewSet(viewsets.ModelViewSet):
    queryset = MenuInfo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MenuSerializer