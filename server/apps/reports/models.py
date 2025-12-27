import uuid
from django.db import models
from django.conf import settings


class Report(models.Model):
    """
    Jira-style Report (Analytics Snapshot)
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    organization = models.ForeignKey(
        "organizations.Organization",
        on_delete=models.CASCADE,
        related_name="reports",
    )

    project = models.ForeignKey(
        "projects.Project",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="reports",
    )

    sprint = models.ForeignKey(
        "sprints.Sprint",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="reports",
    )

    report_type = models.CharField(
        max_length=50,
        choices=[
            ("SPRINT_BURNDOWN", "Sprint Burndown"),
            ("VELOCITY", "Velocity"),
            ("ISSUE_DISTRIBUTION", "Issue Distribution"),
            ("CYCLE_TIME", "Cycle Time"),
            ("TEAM_PERFORMANCE", "Team Performance"),
        ],
    )

    title = models.CharField(max_length=200)

    generated_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="generated_reports",
    )

    data = models.JSONField(
        help_text="Computed report data (charts, metrics, stats)"
    )

    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)

    is_auto_generated = models.BooleanField(default=True)

    generated_at = models.DateTimeField(auto_now_add=True)
    last_refreshed_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "reports"
        ordering = ["-generated_at"]

    def __str__(self):
        return f"{self.report_type} - {self.title}"
