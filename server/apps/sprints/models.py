import uuid
from django.db import models
from django.conf import settings


class Sprint(models.Model):
    """
    Jira-style Sprint (Time-boxed execution unit)
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    project = models.ForeignKey(
        "projects.Project",
        on_delete=models.CASCADE,
        related_name="sprints",
    )

    name = models.CharField(max_length=150)  # Sprint 12, Sprint Q3-1
    goal = models.TextField(blank=True)

    start_date = models.DateField()
    end_date = models.DateField()

    status = models.CharField(
        max_length=20,
        choices=[
            ("PLANNED", "Planned"),
            ("ACTIVE", "Active"),
            ("COMPLETED", "Completed"),
        ],
        default="PLANNED",
    )

    capacity = models.PositiveIntegerField(
        help_text="Total story points capacity"
    )

    committed_points = models.PositiveIntegerField(default=0)
    completed_points = models.PositiveIntegerField(default=0)

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="created_sprints",
    )

    started_at = models.DateTimeField(null=True, blank=True)
    completed_at = models.DateTimeField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "sprints"
        ordering = ["-start_date"]
        unique_together = ("project", "name")

    def __str__(self):
        return f"{self.project.key} - {self.name}"
