from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.
from projects.models import Project

class Skill(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Event(models.Model):
    STATUS_ACTIVE = "active"
    STATUS_COMPLETED = "completed"

    STATUS_CHOICES = [
        (STATUS_ACTIVE, "Active"),
        (STATUS_COMPLETED, "Completed"),
    ]
    name = models.CharField(max_length=200)
    description = models.TextField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    location = models.CharField(max_length=200)
    image = models.ImageField(upload_to='event_images/')
    category = models.CharField(max_length=100)
    contributorsNeeded = models.IntegerField()
    organizer = models.ForeignKey(
        get_user_model(),
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='organized_events'
    )
    contributors = models.ManyToManyField(
        get_user_model(),
        blank=True,
        related_name='events_contributed'
    )
    skills = models.ManyToManyField(Skill, related_name='events')
    impact = models.TextField()
    projects = models.ManyToManyField(
        Project,
        blank=True,
        related_name='events'
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default=STATUS_ACTIVE
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    