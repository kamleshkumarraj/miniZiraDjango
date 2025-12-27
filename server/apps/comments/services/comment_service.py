from django.db import transaction
from django.utils import timezone
from apps.comments.repositories.comment_repo_impl import CommentRepository


class CommentService:

    def __init__(self):
        self.repo = CommentRepository()

    @transaction.atomic
    def create_comment(self, data):
        try:
            return self.repo.create(data)
        except Exception as e:
            raise Exception(f"Comment creation failed: {str(e)}")

    def get_comment(self, comment_id):
        try:
            comment = self.repo.get_by_id(comment_id)
            if not comment:
                raise ValueError("Comment not found")
            return comment
        except Exception as e:
            raise Exception(str(e))

    def list_comments(self, issue):
        try:
            return self.repo.list_by_issue(issue)
        except Exception as e:
            raise Exception(str(e))

    @transaction.atomic
    def update_comment(self, comment_id, data):
        try:
            comment = self.get_comment(comment_id)
            data["edited_at"] = timezone.now()
            return self.repo.update(comment, data)
        except Exception as e:
            raise Exception(f"Comment update failed: {str(e)}")

    @transaction.atomic
    def delete_comment(self, comment_id):
        try:
            comment = self.get_comment(comment_id)
            self.repo.soft_delete(comment)
        except Exception as e:
            raise Exception(f"Comment delete failed: {str(e)}")
