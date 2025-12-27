import uuid
from django.db import models
from django.conf import settings


class Organization(models.Model):
    """
    Jira-style Organization (Tenant)
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    name = models.CharField(max_length=150)
    key = models.CharField(max_length=20, unique=True)   # e.g. MINIZIRA

    domain = models.CharField(
        max_length=100,
        unique=True,
        help_text="Company email domain (minizira.io)"
    )

    description = models.TextField(blank=True)

    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="owned_organizations",
    )

    plan = models.CharField(
        max_length=30,
        choices=[
            ("FREE", "Free"),
            ("PRO", "Pro"),
            ("ENTERPRISE", "Enterprise"),
        ],
        default="FREE",
    )

    status = models.CharField(
        max_length=20,
        choices=[
            ("ACTIVE", "Active"),
            ("SUSPENDED", "Suspended"),
            ("ARCHIVED", "Archived"),
        ],
        default="ACTIVE",
    )

    timezone = models.CharField(max_length=50, default="UTC")
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)

    max_users = models.PositiveIntegerField(default=10)
    max_projects = models.PositiveIntegerField(default=5)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "organizations"

    def __str__(self):
        return f"{self.name} ({self.key})"
