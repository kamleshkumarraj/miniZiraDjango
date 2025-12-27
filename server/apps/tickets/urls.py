from django.urls import path
from apps.tickets.controllers.ticket_view import (
    IssueListCreateAPI,
    IssueDetailAPI,
    IssuesBySprintAPI,
)

urlpatterns = [
    path("project/<uuid:project_id>/", IssueListCreateAPI.as_view()),
    path("<uuid:issue_id>/", IssueDetailAPI.as_view()),
    path("sprint/<uuid:sprint_id>/", IssuesBySprintAPI.as_view()),
]
