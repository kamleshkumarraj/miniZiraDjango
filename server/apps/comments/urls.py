from django.urls import path
from apps.comments.controllers.comment_view import (
    CommentListCreateAPI,
    CommentDetailAPI,
)

urlpatterns = [
    path("issue/<uuid:issue_id>/", CommentListCreateAPI.as_view()),
    path("<uuid:comment_id>/", CommentDetailAPI.as_view()),
]
