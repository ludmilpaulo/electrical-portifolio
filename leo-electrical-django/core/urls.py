
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ServiceViewSet, ProjectViewSet, TestimonialViewSet, LeadViewSet

router = DefaultRouter()
router.register('services', ServiceViewSet, basename='services')
router.register('projects', ProjectViewSet, basename='projects')
router.register('testimonials', TestimonialViewSet, basename='testimonials')
router.register('leads', LeadViewSet, basename='leads')

urlpatterns = [
    path('', include(router.urls)),
]
