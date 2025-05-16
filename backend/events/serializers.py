from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Event

class EventSerializer(ModelSerializer):
    organizer = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Event
        fields = [
            'id',
            'name',
            'description',
            'start_time',
            'end_time',
            'start_date',
            'end_date',
            'location',
            'image',
            'category',
            'contributorsNeeded',
            'organizer',
            'contributors',
            'skills',
            'impact',
            'projects',
            'status'
        ]
        
