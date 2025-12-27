from django.urls import path
from apps.workspaces.views import (
    WorkspaceListCreateAPI,
    WorkspaceDetailAPI,
)

urlpatterns = [
    path("", WorkspaceListCreateAPI.as_view()),
    path("<uuid:workspace_id>/", WorkspaceDetailAPI.as_view()),
]
