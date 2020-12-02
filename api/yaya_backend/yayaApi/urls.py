from rest_framework import routers
from .api import yayaViewSet

router = routers.DefaultRouter()
router.register('api/yayaApi',yayaViewSet, 'yayaApi')

urlpatterns = router.urls