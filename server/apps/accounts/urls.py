from django.urls import path

from apps.accounts.controllers.auth_controller import (
    RegisterAPI,
    LoginAPI,
    ForgotPasswordAPI,
    ResetPasswordAPI,
    UploadAvatarAPI,
)

urlpatterns = [
    path("register/", RegisterAPI.as_view()),
    path("login/", LoginAPI.as_view()),
    path("forgot-password/", ForgotPasswordAPI.as_view()),
    path("reset-password/", ResetPasswordAPI.as_view()),
    path("avatar/", UploadAvatarAPI.as_view()),
]
