from django.urls import path
from apps.reports.views import (
    ProjectReportListCreateAPI,
    SprintReportListAPI,
    ReportDetailAPI,
)

urlpatterns = [
    path("project/<uuid:project_id>/", ProjectReportListCreateAPI.as_view()),
    path("sprint/<uuid:sprint_id>/", SprintReportListAPI.as_view()),
    path("<uuid:report_id>/", ReportDetailAPI.as_view()),
]
