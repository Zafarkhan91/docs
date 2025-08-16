from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'categories', views.CategoryViewSet, basename='category')
router.register(r'user_notes', views.UserNoteViewSet, basename='usernote')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('api/', include(router.urls)),
    path('api/export/', views.export_data, name='export-data'),
]
