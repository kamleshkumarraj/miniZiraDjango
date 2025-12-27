from django.urls import path
from apps.organizations.views import (
    OrganizationListCreateAPI,
    OrganizationDetailAPI,
)

urlpatterns = [
    path("", OrganizationListCreateAPI.as_view()),
    path("<uuid:org_id>/", OrganizationDetailAPI.as_view()),
]
