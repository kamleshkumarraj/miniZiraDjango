from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from apps.projects.services.project_service import ProjectService
from apps.projects.serializers import ProjectSerializer


class ProjectListCreateAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            projects = ProjectService().list_projects_by_org(
                request.user.organization
            )
            return Response(ProjectSerializer(projects, many=True).data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

    def post(self, request):
        try:
            data = request.data.copy()
            data["organization"] = request.user.organization
            data["owner"] = request.user

            project = ProjectService().create_project(data)
            return Response(
                ProjectSerializer(project).data,
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response({"error": str(e)}, status=400)

class ProjectDetailAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, project_id):
        try:
            project = ProjectService().get_project(project_id)
            return Response(ProjectSerializer(project).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)

    def put(self, request, project_id):
        try:
            project = ProjectService().update_project(project_id, request.data)
            return Response(ProjectSerializer(project).data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

    def delete(self, request, project_id):
        try:
            ProjectService().delete_project(project_id)
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

class ProjectsByWorkspaceAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, workspace_id):
        try:
            from apps.workspaces.models import Workspace

            workspace = Workspace.objects.filter(id=workspace_id).first()
            if not workspace:
                raise ValueError("Workspace not found")

            projects = ProjectService().list_projects_by_workspace(workspace)
            return Response(ProjectSerializer(projects, many=True).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)
