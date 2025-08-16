from django.views.generic import TemplateView
from rest_framework import viewsets, permissions
from .models import Category, Topic, UserNote
from .serializers import CategorySerializer, UserNoteSerializer, TopicSerializer
from django.contrib.auth.models import User
from django.http import JsonResponse

class IndexView(TemplateView):
    template_name = 'index.html'

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    A simple ViewSet for viewing all categories and their topics.
    """
    queryset = Category.objects.prefetch_related('topics').all()
    serializer_class = CategorySerializer

class UserNoteViewSet(viewsets.ModelViewSet):
    """
    A ViewSet for viewing and editing the notes of the currently authenticated user.
    """
    serializer_class = UserNoteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # This queryset automatically filters notes for the logged-in user.
        return UserNote.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # When a new note is created, it's automatically assigned to the logged-in user.
        serializer.save(user=self.request.user)

from django.contrib.auth.decorators import login_required

@login_required
def export_data(request):
    """
    An API endpoint to export all topics and user notes for the logged-in user.
    """
    all_topics = Topic.objects.all()
    user_notes = UserNote.objects.filter(user=request.user)

    topic_serializer = TopicSerializer(all_topics, many=True)
    note_serializer = UserNoteSerializer(user_notes, many=True)

    data = {
        # Converting topics to a dict with category as key for easier frontend processing
        'topics_by_category': {
            category.name: TopicSerializer(category.topics.all(), many=True).data
            for category in Category.objects.prefetch_related('topics').all()
        },
        'user_notes': note_serializer.data
    }

    return JsonResponse(data)
