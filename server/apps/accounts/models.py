import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    full_name = models.CharField(max_length=150)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)

    avatar = models.ImageField(upload_to="avatars/", null=True, blank=True)

    role = models.CharField(
        max_length=30,
        choices=[
            ("ORG_ADMIN", "Org Admin"),
            ("MANAGER", "Manager"),
            ("EMPLOYEE", "Employee"),
        ],
        default="EMPLOYEE",
    )

    specialization = models.CharField(max_length=100, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "full_name"]

    def __str__(self):
        return self.email
