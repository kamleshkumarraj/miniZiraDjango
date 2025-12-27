import uuid
from django.db import models
from django.conf import settings


class Profile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="profile"
    )

    initials = models.CharField(max_length=5)

    role = models.CharField(max_length=100)
    department = models.CharField(max_length=100)

    employee_id = models.CharField(max_length=20, unique=True)

    status = models.CharField(
        max_length=20,
        choices=[
            ("Active", "Active"),
            ("Inactive", "Inactive"),
            ("On Leave", "On Leave"),
        ],
        default="Active",
    )

    location = models.CharField(max_length=100)
    timezone = models.CharField(max_length=50)

    manager = models.CharField(max_length=100)

    employment_type = models.CharField(
        max_length=30,
        choices=[
            ("Full-time", "Full-time"),
            ("Part-time", "Part-time"),
            ("Contract", "Contract"),
        ],
    )

    joined_on = models.DateField()
    last_active = models.DateTimeField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "profiles"

    def __str__(self):
        return f"{self.employee_id} - {self.user.email}"
