from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from apps.reports.services.report_service import ReportService
from apps.reports.serializers import ReportSerializer
from apps.projects.models import Project
from apps.sprints.models import Sprint


class ProjectReportListCreateAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, project_id):
        try:
            project = Project.objects.filter(id=project_id).first()
            if not project:
                raise ValueError("Project not found")

            reports = ReportService().list_reports_by_project(project)
            return Response(ReportSerializer(reports, many=True).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)

    def post(self, request, project_id):
        try:
            project = Project.objects.filter(id=project_id).first()
            if not project:
                raise ValueError("Project not found")

            data = request.data.copy()
            data["project"] = project
            data["organization"] = project.organization
            data["generated_by"] = request.user

            report = ReportService().generate_report(data)
            return Response(
                ReportSerializer(report).data,
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response({"error": str(e)}, status=400)

class SprintReportListAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, sprint_id):
        try:
            sprint = Sprint.objects.filter(id=sprint_id).first()
            if not sprint:
                raise ValueError("Sprint not found")

            reports = ReportService().list_reports_by_sprint(sprint)
            return Response(ReportSerializer(reports, many=True).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)

class ReportDetailAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, report_id):
        try:
            report = ReportService().get_report(report_id)
            return Response(ReportSerializer(report).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)

    def put(self, request, report_id):
        try:
            report = ReportService().refresh_report(
                report_id, request.data
            )
            return Response(ReportSerializer(report).data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

    def delete(self, request, report_id):
        try:
            ReportService().delete_report(report_id)
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
