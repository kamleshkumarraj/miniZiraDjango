from django.db import transaction
from django.utils import timezone
from apps.sprints.repositories.sprint_repo_impl import SprintRepository


class SprintService:

    def __init__(self):
        self.repo = SprintRepository()

    @transaction.atomic
    def create_sprint(self, data):
        try:
            active = self.repo.get_active_sprint(data["project"])
            if active:
                raise ValueError("An active sprint already exists")

            return self.repo.create(data)

        except Exception as e:
            raise Exception(f"Sprint creation failed: {str(e)}")

    def get_sprint(self, sprint_id):
        try:
            sprint = self.repo.get_by_id(sprint_id)
            if not sprint:
                raise ValueError("Sprint not found")
            return sprint
        except Exception as e:
            raise Exception(str(e))

    def list_sprints(self, project):
        try:
            return self.repo.list_by_project(project)
        except Exception as e:
            raise Exception(str(e))

    @transaction.atomic
    def start_sprint(self, sprint_id):
        try:
            sprint = self.get_sprint(sprint_id)
            if sprint.status != "PLANNED":
                raise ValueError("Only planned sprint can be started")

            sprint.status = "ACTIVE"
            sprint.started_at = timezone.now()
            sprint.save()
            return sprint

        except Exception as e:
            raise Exception(f"Sprint start failed: {str(e)}")

    @transaction.atomic
    def complete_sprint(self, sprint_id):
        try:
            sprint = self.get_sprint(sprint_id)
            if sprint.status != "ACTIVE":
                raise ValueError("Only active sprint can be completed")

            sprint.status = "COMPLETED"
            sprint.completed_at = timezone.now()
            sprint.save()
            return sprint

        except Exception as e:
            raise Exception(f"Sprint completion failed: {str(e)}")

    @transaction.atomic
    def update_sprint(self, sprint_id, data):
        try:
            sprint = self.get_sprint(sprint_id)
            return self.repo.update(sprint, data)
        except Exception as e:
            raise Exception(f"Sprint update failed: {str(e)}")

    @transaction.atomic
    def delete_sprint(self, sprint_id):
        try:
            sprint = self.get_sprint(sprint_id)
            self.repo.delete(sprint)
        except Exception as e:
            raise Exception(f"Sprint delete failed: {str(e)}")
