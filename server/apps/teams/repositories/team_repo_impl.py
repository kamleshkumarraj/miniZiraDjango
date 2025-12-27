from apps.teams.models import Team
from apps.teams.interfaces.team_repo import ITeamRepository


class TeamRepository(ITeamRepository):

    def create(self, data):
        members = data.pop("members", [])
        team = Team.objects.create(**data)
        if members:
            team.members.set(members)
        return team

    def get_by_id(self, team_id):
        return Team.objects.filter(id=team_id).first()

    def list_by_org(self, organization):
        return Team.objects.filter(organization=organization)

    def update(self, team, data):
        members = data.pop("members", None)
        for key, value in data.items():
            setattr(team, key, value)
        team.save()

        if members is not None:
            team.members.set(members)

        return team

    def delete(self, team):
        team.delete()
