from django.db import transaction
from apps.projects.repositories.project_repo_impl import ProjectRepository


class ProjectService:

    def __init__(self):
        self.repo = ProjectRepository()

    @transaction.atomic
    def create_project(self, data):
        try:
            return self.repo.create(data)
        except Exception as e:
            raise Exception(f"Project creation failed: {str(e)}")

    def get_project(self, project_id):
        try:
            project = self.repo.get_by_id(project_id)
            if not project:
                raise ValueError("Project not found")
            return project
        except Exception as e:
            raise Exception(str(e))

    def list_projects_by_org(self, organization):
        try:
            return self.repo.list_by_org(organization)
        except Exception as e:
            raise Exception(str(e))

    def list_projects_by_workspace(self, workspace):
        try:
            return self.repo.list_by_workspace(workspace)
        except Exception as e:
            raise Exception(str(e))

    @transaction.atomic
    def update_project(self, project_id, data):
        try:
            project = self.repo.get_by_id(project_id)
            if not project:
                raise ValueError("Project not found")

            return self.repo.update(project, data)
        except Exception as e:
            raise Exception(f"Project update failed: {str(e)}")

    @transaction.atomic
    def delete_project(self, project_id):
        try:
            project = self.repo.get_by_id(project_id)
            if not project:
                raise ValueError("Project not found")

            self.repo.delete(project)
        except Exception as e:
            raise Exception(f"Project delete failed: {str(e)}")
