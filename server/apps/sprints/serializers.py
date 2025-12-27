from rest_framework import serializers
from apps.sprints.models import Sprint


class SprintSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sprint
        fields = "__all__"
        read_only_fields = (
            "id",
            "created_at",
            "updated_at",
            "started_at",
            "completed_at",
        )
