from apps.workspaces.models import Workspace
from apps.workspaces.interfaces.workspace_repo import IWorkspaceRepository


class WorkspaceRepository(IWorkspaceRepository):

    def create(self, data):
        return Workspace.objects.create(**data)

    def get_by_id(self, workspace_id):
        return Workspace.objects.filter(id=workspace_id).first()

    def list_by_org(self, organization):
        return Workspace.objects.filter(organization=organization)

    def update(self, workspace, data):
        for key, value in data.items():
            setattr(workspace, key, value)
        workspace.save()
        return workspace

    def delete(self, workspace):
        workspace.delete()
