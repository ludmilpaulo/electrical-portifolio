
from rest_framework import viewsets, permissions
from .models import Service, Project, Testimonial, Lead
from .serializers import ServiceSerializer, ProjectSerializer, TestimonialSerializer, LeadSerializer

class ReadOnly(viewsets.ReadOnlyModelViewSet):
    permission_classes = [permissions.AllowAny]

class ServiceViewSet(ReadOnly):
    queryset = Service.objects.order_by('name')
    serializer_class = ServiceSerializer

class ProjectViewSet(ReadOnly):
    queryset = Project.objects.order_by('-completed_date', '-created')
    serializer_class = ProjectSerializer

class TestimonialViewSet(ReadOnly):
    queryset = Testimonial.objects.order_by('-created')
    serializer_class = TestimonialSerializer

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all().order_by('-created')
    serializer_class = LeadSerializer
    permission_classes = [permissions.AllowAny]
