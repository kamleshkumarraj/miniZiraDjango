from django.db import transaction
from django.utils import timezone
from apps.reports.repositories.report_repo_impl import ReportRepository


class ReportService:

    def __init__(self):
        self.repo = ReportRepository()

    @transaction.atomic
    def generate_report(self, data):
        try:
            return self.repo.create(data)
        except Exception as e:
            raise Exception(f"Report generation failed: {str(e)}")

    def get_report(self, report_id):
        try:
            report = self.repo.get_by_id(report_id)
            if not report:
                raise ValueError("Report not found")
            return report
        except Exception as e:
            raise Exception(str(e))

    def list_reports_by_project(self, project):
        try:
            return self.repo.list_by_project(project)
        except Exception as e:
            raise Exception(str(e))

    def list_reports_by_sprint(self, sprint):
        try:
            return self.repo.list_by_sprint(sprint)
        except Exception as e:
            raise Exception(str(e))

    @transaction.atomic
    def refresh_report(self, report_id, new_data):
        try:
            report = self.get_report(report_id)
            new_data["last_refreshed_at"] = timezone.now()
            return self.repo.update(report, new_data)
        except Exception as e:
            raise Exception(f"Report refresh failed: {str(e)}")

    @transaction.atomic
    def delete_report(self, report_id):
        try:
            report = self.get_report(report_id)
            self.repo.delete(report)
        except Exception as e:
            raise Exception(f"Report delete failed: {str(e)}")
