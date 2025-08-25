
from django.conf import settings
from django.core.mail import send_mail
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Lead

@receiver(post_save, sender=Lead)
def notify_new_lead(sender, instance: Lead, created, **kwargs):
    if not created:
        return
    to = [settings.ADMIN_NOTIFY_EMAIL] if settings.ADMIN_NOTIFY_EMAIL else []
    if not to:
        return
    subject = f"New Lead: {instance.name} - {instance.service_type}"
    msg = f"""Name: {instance.name}
Email: {instance.email}
Phone: {instance.phone}
Address: {instance.address}
Service: {instance.service_type}
Preferred date: {instance.preferred_date}
Message: {instance.message}
Created: {instance.created}
"""
    try:
        send_mail(subject, msg, settings.EMAIL_HOST_USER, to, fail_silently=True)
    except Exception:
        pass
