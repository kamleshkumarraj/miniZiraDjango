from rest_framework import serializers
from apps.comments.models import Comment


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = "__all__"
        read_only_fields = (
            "id",
            "author",
            "is_edited",
            "edited_at",
            "created_at",
            "updated_at",
        )
