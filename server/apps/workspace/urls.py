from django.urls import path
from apps.workspaces.controllers.workspace_view import (
    WorkspaceListCreateAPI,
    WorkspaceDetailAPI,
)

urlpatterns = [
    path("", WorkspaceListCreateAPI.as_view()),
    path("<uuid:workspace_id>/", WorkspaceDetailAPI.as_view()),
]
