from django.urls import path

from apps.sprints.views import (
    SprintListCreateAPI,
    SprintDetailAPI,
    SprintStartAPI,
    SprintCompleteAPI,
)


urlpatterns = [
  path("project/<uuid:project_id>/", SprintListCreateAPI.as_view()),
  path("<uuid:sprint_id>/", SprintDetailAPI.as_view()),
  path("<uuid:sprint_id>/start/", SprintStartAPI.as_view()),
  path("<uuid:sprint_id>/complete/", SprintCompleteAPI.as_view()),
]



