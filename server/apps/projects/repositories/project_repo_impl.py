from apps.projects.models import Project
from apps.projects.interfaces.project_repo import IProjectRepository


class ProjectRepository(IProjectRepository):

    def create(self, data):
        return Project.objects.create(**data)

    def get_by_id(self, project_id):
        return Project.objects.filter(id=project_id).first()

    def list_by_org(self, organization):
        return Project.objects.filter(organization=organization)

    def list_by_workspace(self, workspace):
        return Project.objects.filter(workspace=workspace)

    def update(self, project, data):
        for key, value in data.items():
            setattr(project, key, value)
        project.save()
        return project

    def delete(self, project):
        project.delete()
