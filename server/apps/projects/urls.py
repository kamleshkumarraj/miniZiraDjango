from django.urls import path
from apps.projects.controllers.project_view import (
    ProjectListCreateAPI,
    ProjectDetailAPI,
    ProjectsByWorkspaceAPI,
)

urlpatterns = [
    path("", ProjectListCreateAPI.as_view()),
    path("<uuid:project_id>/", ProjectDetailAPI.as_view()),
    path("workspace/<uuid:workspace_id>/", ProjectsByWorkspaceAPI.as_view()),
]
