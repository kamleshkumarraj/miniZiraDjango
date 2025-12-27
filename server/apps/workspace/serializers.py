from rest_framework import serializers
from apps.workspaces.models import Workspace


class WorkspaceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Workspace
        fields = "__all__"
        read_only_fields = ("id", "created_at", "updated_at")
