from django.db import transaction
from apps.teams.repositories.team_repo_impl import TeamRepository


class TeamService:

    def __init__(self):
        self.repo = TeamRepository()

    @transaction.atomic
    def create_team(self, data):
        try:
            return self.repo.create(data)
        except Exception as e:
            raise Exception(f"Team creation failed: {str(e)}")

    def get_team(self, team_id):
        try:
            team = self.repo.get_by_id(team_id)
            if not team:
                raise ValueError("Team not found")
            return team
        except Exception as e:
            raise Exception(str(e))

    def list_teams(self, organization):
        try:
            return self.repo.list_by_org(organization)
        except Exception as e:
            raise Exception(str(e))

    @transaction.atomic
    def update_team(self, team_id, data):
        try:
            team = self.repo.get_by_id(team_id)
            if not team:
                raise ValueError("Team not found")
            return self.repo.update(team, data)
        except Exception as e:
            raise Exception(f"Team update failed: {str(e)}")

    @transaction.atomic
    def delete_team(self, team_id):
        try:
            team = self.repo.get_by_id(team_id)
            if not team:
                raise ValueError("Team not found")
            self.repo.delete(team)
        except Exception as e:
            raise Exception(f"Team delete failed: {str(e)}")
