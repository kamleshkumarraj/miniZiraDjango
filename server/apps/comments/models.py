import uuid
from django.db import models
from django.conf import settings


class Comment(models.Model):
    """
    Jira-style Comment (Issue discussion & audit)
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    issue = models.ForeignKey(
        "issues.Issue",
        on_delete=models.CASCADE,
        related_name="comments",
    )

    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="comments",
    )

    body = models.TextField()

    is_internal = models.BooleanField(
        default=False,
        help_text="Internal comment (only team members)"
    )

    is_edited = models.BooleanField(default=False)
    edited_at = models.DateTimeField(null=True, blank=True)

    is_deleted = models.BooleanField(default=False)

    mentioned_users = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name="mentioned_in_comments",
        blank=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "comments"
        ordering = ["created_at"]

    def __str__(self):
        return f"Comment on {self.issue_id} by {self.author}"
