
from django.db import models

class Timestamped(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    class Meta:
        abstract = True

class Service(Timestamped):
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    benefits = models.JSONField(default=list, blank=True)

    def __str__(self):
        return self.name

class Project(Timestamped):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    location = models.CharField(max_length=100, blank=True)
    completed_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.title

class Testimonial(Timestamped):
    author = models.CharField(max_length=100)
    quote = models.TextField()
    rating = models.PositiveSmallIntegerField(default=5)

    def __str__(self):
        return f"{self.author} ({self.rating}★)"

class Lead(Timestamped):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    address = models.CharField(max_length=200, blank=True)
    service_type = models.CharField(max_length=120, blank=True)
    preferred_date = models.DateField(null=True, blank=True)
    message = models.TextField(blank=True)
    is_contacted = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} - {self.service_type}"
