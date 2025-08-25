
from django.contrib import admin
from .models import Service, Project, Testimonial, Lead

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("name", "created", "updated")
    search_fields = ("name",)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "location", "completed_date")
    search_fields = ("title", "location")

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("author", "rating", "created")

@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ("name", "phone", "email", "service_type", "created", "is_contacted")
    list_filter = ("is_contacted", "created")
    search_fields = ("name", "email", "phone", "service_type")
