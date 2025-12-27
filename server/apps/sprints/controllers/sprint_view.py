from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from apps.sprints.services.sprint_service import SprintService
from apps.sprints.serializers import SprintSerializer
from apps.projects.models import Project


class SprintListCreateAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, project_id):
        try:
            project = Project.objects.filter(id=project_id).first()
            if not project:
                raise ValueError("Project not found")

            sprints = SprintService().list_sprints(project)
            return Response(SprintSerializer(sprints, many=True).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)

    def post(self, request, project_id):
        try:
            project = Project.objects.filter(id=project_id).first()
            if not project:
                raise ValueError("Project not found")

            data = request.data.copy()
            data["project"] = project
            data["created_by"] = request.user

            sprint = SprintService().create_sprint(data)
            return Response(
                SprintSerializer(sprint).data,
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response({"error": str(e)}, status=400)


class SprintDetailAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, sprint_id):
        try:
            sprint = SprintService().get_sprint(sprint_id)
            return Response(SprintSerializer(sprint).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)

    def put(self, request, sprint_id):
        try:
            sprint = SprintService().update_sprint(sprint_id, request.data)
            return Response(SprintSerializer(sprint).data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

    def delete(self, request, sprint_id):
        try:
            SprintService().delete_sprint(sprint_id)
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

class SprintStartAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, sprint_id):
        try:
            sprint = SprintService().start_sprint(sprint_id)
            return Response(SprintSerializer(sprint).data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)


class SprintCompleteAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, sprint_id):
        try:
            sprint = SprintService().complete_sprint(sprint_id)
            return Response(SprintSerializer(sprint).data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
