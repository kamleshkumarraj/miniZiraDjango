from django.db import transaction
from apps.tickets.repositories.ticket_repo_impl import IssueRepository


class IssueService:

    def __init__(self):
        self.repo = IssueRepository()

    @transaction.atomic
    def create_issue(self, data):
        try:
            return self.repo.create(data)
        except Exception as e:
            raise Exception(f"Issue creation failed: {str(e)}")

    def get_issue(self, issue_id):
        try:
            issue = self.repo.get_by_id(issue_id)
            if not issue:
                raise ValueError("Issue not found")
            return issue
        except Exception as e:
            raise Exception(str(e))

    def list_by_project(self, project):
        try:
            return self.repo.list_by_project(project)
        except Exception as e:
            raise Exception(str(e))

    def list_by_sprint(self, sprint):
        try:
            return self.repo.list_by_sprint(sprint)
        except Exception as e:
            raise Exception(str(e))

    @transaction.atomic
    def update_issue(self, issue_id, data):
        try:
            issue = self.get_issue(issue_id)
            return self.repo.update(issue, data)
        except Exception as e:
            raise Exception(f"Issue update failed: {str(e)}")

    @transaction.atomic
    def delete_issue(self, issue_id):
        try:
            issue = self.get_issue(issue_id)
            self.repo.delete(issue)
        except Exception as e:
            raise Exception(f"Issue delete failed: {str(e)}")
