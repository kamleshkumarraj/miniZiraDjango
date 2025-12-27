from django.urls import path

from apps.profiles.controllers.profile_view import (
    MyProfileAPI,
    ProfileByEmployeeIdAPI,
)

urlpatterns = [
    path("me/", MyProfileAPI.as_view()),
    path("<str:employee_id>/", ProfileByEmployeeIdAPI.as_view()),
]
