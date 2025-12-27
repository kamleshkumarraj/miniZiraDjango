from apps.sprints.models import Sprint
from apps.sprints.interfaces.sprint_repo import ISprintRepository


class SprintRepository(ISprintRepository):

    def create(self, data):
        return Sprint.objects.create(**data)

    def get_by_id(self, sprint_id):
        return Sprint.objects.filter(id=sprint_id).first()

    def list_by_project(self, project):
        return Sprint.objects.filter(project=project)

    def get_active_sprint(self, project):
        return Sprint.objects.filter(
            project=project, status="ACTIVE"
        ).first()

    def update(self, sprint, data):
        for key, value in data.items():
            setattr(sprint, key, value)
        sprint.save()
        return sprint

    def delete(self, sprint):
        sprint.delete()
