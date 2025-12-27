from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from apps.tickets.services.ticket_service import IssueService
from apps.tickets.serializers import IssueSerializer
from apps.projects.models import Project
from apps.sprints.models import Sprint


class IssueListCreateAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, project_id):
        try:
            project = Project.objects.filter(id=project_id).first()
            if not project:
                raise ValueError("Project not found")

            issues = IssueService().list_by_project(project)
            return Response(IssueSerializer(issues, many=True).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)

    def post(self, request, project_id):
        try:
            project = Project.objects.filter(id=project_id).first()
            if not project:
                raise ValueError("Project not found")

            data = request.data.copy()
            data["project"] = project
            data["reporter"] = request.user

            issue = IssueService().create_issue(data)
            return Response(
                IssueSerializer(issue).data,
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response({"error": str(e)}, status=400)

class IssueDetailAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, issue_id):
        try:
            issue = IssueService().get_issue(issue_id)
            return Response(IssueSerializer(issue).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)

    def put(self, request, issue_id):
        try:
            issue = IssueService().update_issue(issue_id, request.data)
            return Response(IssueSerializer(issue).data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

    def delete(self, request, issue_id):
        try:
            IssueService().delete_issue(issue_id)
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

class IssuesBySprintAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, sprint_id):
        try:
            sprint = Sprint.objects.filter(id=sprint_id).first()
            if not sprint:
                raise ValueError("Sprint not found")

            issues = IssueService().list_by_sprint(sprint)
            return Response(IssueSerializer(issues, many=True).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)
