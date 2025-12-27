import uuid
from django.db import models
from django.conf import settings


class Workspace(models.Model):
    """
    Jira-style Workspace (Project grouping layer)
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    organization = models.ForeignKey(
        "organizations.Organization",
        on_delete=models.CASCADE,
        related_name="workspaces",
    )

    name = models.CharField(max_length=150)
    key = models.CharField(max_length=20)  # e.g. ENG, CLIENT-A

    description = models.TextField(blank=True)

    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="owned_workspaces",
    )

    visibility = models.CharField(
        max_length=20,
        choices=[
            ("PUBLIC", "Public"),
            ("PRIVATE", "Private"),
        ],
        default="PRIVATE",
    )

    workspace_type = models.CharField(
        max_length=30,
        choices=[
            ("DEPARTMENT", "Department"),
            ("CLIENT", "Client"),
            ("PRODUCT", "Product"),
            ("INTERNAL", "Internal"),
        ],
    )

    status = models.CharField(
        max_length=20,
        choices=[
            ("ACTIVE", "Active"),
            ("ARCHIVED", "Archived"),
        ],
        default="ACTIVE",
    )

    default_project_visibility = models.CharField(
        max_length=20,
        choices=[
            ("PUBLIC", "Public"),
            ("PRIVATE", "Private"),
        ],
        default="PRIVATE",
    )

    timezone = models.CharField(max_length=50)
    color = models.CharField(max_length=20, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "workspaces"
        unique_together = ("organization", "key")

    def __str__(self):
        return f"{self.name} ({self.key})"
