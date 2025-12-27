import uuid
from django.db import models
from django.conf import settings


class Project(models.Model):
    """
    Jira-style Project (Execution Unit)
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    organization = models.ForeignKey(
        "organizations.Organization",
        on_delete=models.CASCADE,
        related_name="projects",
    )

    workspace = models.ForeignKey(
        "workspaces.Workspace",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="projects",
    )

    name = models.CharField(max_length=150)
    key = models.CharField(max_length=20)  # e.g. MZ, PAY, AUTH

    description = models.TextField(blank=True)

    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="owned_projects",
    )

    project_type = models.CharField(
        max_length=30,
        choices=[
            ("SCRUM", "Scrum"),
            ("KANBAN", "Kanban"),
        ],
        default="SCRUM",
    )

    visibility = models.CharField(
        max_length=20,
        choices=[
            ("PUBLIC", "Public"),
            ("PRIVATE", "Private"),
        ],
        default="PRIVATE",
    )

    status = models.CharField(
        max_length=20,
        choices=[
            ("ACTIVE", "Active"),
            ("ARCHIVED", "Archived"),
        ],
        default="ACTIVE",
    )

    default_assignee = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="default_assigned_projects",
    )

    start_date = models.DateField(null=True, blank=True)
    target_end_date = models.DateField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "projects"
        unique_together = ("organization", "key")

    def __str__(self):
        return f"{self.name} ({self.key})"
