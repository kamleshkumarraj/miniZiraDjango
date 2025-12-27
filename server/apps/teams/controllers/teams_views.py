from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from apps.teams.services.team_service import TeamService
from apps.teams.serializers import TeamSerializer


class TeamListCreateAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            teams = TeamService().list_teams(request.user.organization)
            return Response(TeamSerializer(teams, many=True).data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

    def post(self, request):
        try:
            data = request.data.copy()
            data["organization"] = request.user.organization
            team = TeamService().create_team(data)
            return Response(
                TeamSerializer(team).data,
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response({"error": str(e)}, status=400)

class TeamDetailAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, team_id):
        try:
            team = TeamService().get_team(team_id)
            return Response(TeamSerializer(team).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)

    def put(self, request, team_id):
        try:
            team = TeamService().update_team(team_id, request.data)
            return Response(TeamSerializer(team).data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

    def delete(self, request, team_id):
        try:
            TeamService().delete_team(team_id)
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
