from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from apps.workspaces.services.workspace_service import WorkspaceService
from apps.workspaces.serializers import WorkspaceSerializer


class WorkspaceListCreateAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            workspaces = WorkspaceService().list_workspaces(
                request.user.organization
            )
            return Response(WorkspaceSerializer(workspaces, many=True).data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

    def post(self, request):
        try:
            data = request.data.copy()
            data["organization"] = request.user.organization
            data["owner"] = request.user

            workspace = WorkspaceService().create_workspace(data)
            return Response(
                WorkspaceSerializer(workspace).data,
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response({"error": str(e)}, status=400)

class WorkspaceDetailAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, workspace_id):
        try:
            workspace = WorkspaceService().get_workspace(workspace_id)
            return Response(WorkspaceSerializer(workspace).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)

    def put(self, request, workspace_id):
        try:
            workspace = WorkspaceService().update_workspace(
                workspace_id, request.data
            )
            return Response(WorkspaceSerializer(workspace).data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

    def delete(self, request, workspace_id):
        try:
            WorkspaceService().delete_workspace(workspace_id)
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
