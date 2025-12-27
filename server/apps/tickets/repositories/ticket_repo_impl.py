from apps.tickets.models import Issue
from apps.tickets.interfaces.ticket_repo import IIssueRepository


class IssueRepository(IIssueRepository):

    def create(self, data):
        return Issue.objects.create(**data)

    def get_by_id(self, issue_id):
        return Issue.objects.filter(id=issue_id).first()

    def list_by_project(self, project):
        return Issue.objects.filter(project=project)

    def list_by_sprint(self, sprint):
        return Issue.objects.filter(sprint=sprint)

    def update(self, issue, data):
        for key, value in data.items():
            setattr(issue, key, value)
        issue.save()
        return issue

    def delete(self, issue):
        issue.delete()
