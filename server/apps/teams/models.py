import uuid
from django.db import models
from django.conf import settings


class Team(models.Model):
    """
    Jira-style Team model
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    organization = models.ForeignKey(
        "organizations.Organization",
        on_delete=models.CASCADE,
        related_name="teams",
    )

    name = models.CharField(max_length=100)
    key = models.CharField(max_length=20)  # e.g. FE, BE, QA

    description = models.TextField(blank=True)

    lead = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="leading_teams",
    )

    members = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name="teams",
        blank=True,
    )

    team_type = models.CharField(
        max_length=30,
        choices=[
            ("Frontend", "Frontend"),
            ("Backend", "Backend"),
            ("QA", "QA"),
            ("DevOps", "DevOps"),
            ("Cross-Functional", "Cross-Functional"),
        ],
    )

    capacity_per_sprint = models.PositiveIntegerField(
        help_text="Story points capacity per sprint"
    )

    timezone = models.CharField(max_length=50)
    location = models.CharField(max_length=100)

    status = models.CharField(
        max_length=20,
        choices=[
            ("Active", "Active"),
            ("Inactive", "Inactive"),
        ],
        default="Active",
    )

    is_default = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "teams"
        unique_together = ("organization", "key")

    def __str__(self):
        return f"{self.name} ({self.key})"
