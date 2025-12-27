from django.db import transaction
from apps.workspaces.repositories.workspace_repo_impl import WorkspaceRepository


class WorkspaceService:

    def __init__(self):
        self.repo = WorkspaceRepository()

    @transaction.atomic
    def create_workspace(self, data):
        try:
            return self.repo.create(data)
        except Exception as e:
            raise Exception(f"Workspace creation failed: {str(e)}")

    def get_workspace(self, workspace_id):
        try:
            workspace = self.repo.get_by_id(workspace_id)
            if not workspace:
                raise ValueError("Workspace not found")
            return workspace
        except Exception as e:
            raise Exception(str(e))

    def list_workspaces(self, organization):
        try:
            return self.repo.list_by_org(organization)
        except Exception as e:
            raise Exception(str(e))

    @transaction.atomic
    def update_workspace(self, workspace_id, data):
        try:
            workspace = self.repo.get_by_id(workspace_id)
            if not workspace:
                raise ValueError("Workspace not found")

            return self.repo.update(workspace, data)
        except Exception as e:
            raise Exception(f"Workspace update failed: {str(e)}")

    @transaction.atomic
    def delete_workspace(self, workspace_id):
        try:
            workspace = self.repo.get_by_id(workspace_id)
            if not workspace:
                raise ValueError("Workspace not found")

            self.repo.delete(workspace)
        except Exception as e:
            raise Exception(f"Workspace delete failed: {str(e)}")
