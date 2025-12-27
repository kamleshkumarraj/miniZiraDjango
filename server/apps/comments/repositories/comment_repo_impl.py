from apps.comments.models import Comment
from apps.comments.interfaces.comment_repo import ICommentRepository


class CommentRepository(ICommentRepository):

    def create(self, data):
        mentions = data.pop("mentioned_users", [])
        comment = Comment.objects.create(**data)
        if mentions:
            comment.mentioned_users.set(mentions)
        return comment

    def get_by_id(self, comment_id):
        return Comment.objects.filter(
            id=comment_id, is_deleted=False
        ).first()

    def list_by_issue(self, issue):
        return Comment.objects.filter(
            issue=issue, is_deleted=False
        )

    def update(self, comment, data):
        mentions = data.pop("mentioned_users", None)

        for key, value in data.items():
            setattr(comment, key, value)

        comment.is_edited = True
        comment.save()

        if mentions is not None:
            comment.mentioned_users.set(mentions)

        return comment

    def soft_delete(self, comment):
        comment.is_deleted = True
        comment.save()
