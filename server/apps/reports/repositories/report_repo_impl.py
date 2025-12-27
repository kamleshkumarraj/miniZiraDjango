from apps.reports.models import Report
from apps.reports.interfaces.report_repo import IReportRepository


class ReportRepository(IReportRepository):

    def create(self, data):
        return Report.objects.create(**data)

    def get_by_id(self, report_id):
        return Report.objects.filter(id=report_id).first()

    def list_by_project(self, project):
        return Report.objects.filter(project=project)

    def list_by_sprint(self, sprint):
        return Report.objects.filter(sprint=sprint)

    def update(self, report, data):
        for key, value in data.items():
            setattr(report, key, value)
        report.save()
        return report

    def delete(self, report):
        report.delete()
