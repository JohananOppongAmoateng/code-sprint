from django.shortcuts import get_object_or_404
from django.utils import timezone
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

from .serializers import EventSerializer
from .models import Event
# Create your views here.

@api_view(['GET'])
def upcoming_events(request):
    upcoming_events = Event.objects.filter(start_time__gte=timezone.now())
    serializer = EventSerializer(upcoming_events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def past_events(request):
    events = Event.objects.filter(end_time__lt=timezone.now())
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def event_list(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def event_detail(request, slug):
    event = get_object_or_404(Event, slug=slug)
    serializer = EventSerializer(event)
    return Response(serializer.data)
     