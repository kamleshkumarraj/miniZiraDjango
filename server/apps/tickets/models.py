import uuid
from django.db import models
from django.conf import settings


class Issue(models.Model):
    """
    Jira-style Issue / Ticket
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    project = models.ForeignKey(
        "projects.Project",
        on_delete=models.CASCADE,
        related_name="issues",
    )

    sprint = models.ForeignKey(
        "sprints.Sprint",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="issues",
    )

    parent = models.ForeignKey(
        "self",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="sub_tasks",
    )

    issue_type = models.CharField(
        max_length=30,
        choices=[
            ("EPIC", "Epic"),
            ("STORY", "Story"),
            ("TASK", "Task"),
            ("BUG", "Bug"),
            ("SUB_TASK", "Sub Task"),
        ],
    )

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    status = models.CharField(
        max_length=30,
        choices=[
            ("BACKLOG", "Backlog"),
            ("TODO", "To Do"),
            ("IN_PROGRESS", "In Progress"),
            ("REVIEW", "Review"),
            ("QA", "QA"),
            ("DONE", "Done"),
        ],
        default="BACKLOG",
    )

    priority = models.CharField(
        max_length=20,
        choices=[
            ("LOW", "Low"),
            ("MEDIUM", "Medium"),
            ("HIGH", "High"),
            ("CRITICAL", "Critical"),
        ],
        default="MEDIUM",
    )

    assignee = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="assigned_issues",
    )

    reporter = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="reported_issues",
    )

    story_points = models.PositiveIntegerField(null=True, blank=True)
    due_date = models.DateField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "issues"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.project.key} - {self.title}"
