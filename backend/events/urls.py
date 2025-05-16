from rest_framework.urls import path    
from .views import upcoming_events, past_events, event_list, event_detail

urlpatterns = [
    path('upcoming/', upcoming_events, name='upcoming-events'),
    path('past/', past_events, name='past-events'),
    path('', event_list, name='event-list'),
    path('<slug:slug>/', event_detail, name='event-detail'),
]