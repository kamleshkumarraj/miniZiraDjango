from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from apps.comments.services.comment_service import CommentService
from apps.comments.serializers import CommentSerializer
from apps.issues.models import Issue


class CommentListCreateAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, issue_id):
        try:
            issue = Issue.objects.filter(id=issue_id).first()
            if not issue:
                raise ValueError("Issue not found")

            comments = CommentService().list_comments(issue)
            return Response(CommentSerializer(comments, many=True).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)

    def post(self, request, issue_id):
        try:
            issue = Issue.objects.filter(id=issue_id).first()
            if not issue:
                raise ValueError("Issue not found")

            data = request.data.copy()
            data["issue"] = issue
            data["author"] = request.user

            comment = CommentService().create_comment(data)
            return Response(
                CommentSerializer(comment).data,
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response({"error": str(e)}, status=400)

class CommentDetailAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, comment_id):
        try:
            comment = CommentService().get_comment(comment_id)
            return Response(CommentSerializer(comment).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)

    def put(self, request, comment_id):
        try:
            comment = CommentService().update_comment(
                comment_id, request.data
            )
            return Response(CommentSerializer(comment).data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

    def delete(self, request, comment_id):
        try:
            CommentService().delete_comment(comment_id)
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
