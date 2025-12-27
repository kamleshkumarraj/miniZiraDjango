from django.urls import path
from apps.teams.controllers.teams_views import TeamListCreateAPI, TeamDetailAPI

urlpatterns = [
    path("", TeamListCreateAPI.as_view()),
    path("<uuid:team_id>/", TeamDetailAPI.as_view()),
]
