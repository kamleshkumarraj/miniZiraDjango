from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from apps.organizations.services.organization_service import OrganizationService
from apps.organizations.serializers import OrganizationSerializer


class OrganizationListCreateAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            orgs = OrganizationService().list_organizations()
            return Response(OrganizationSerializer(orgs, many=True).data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

    def post(self, request):
        try:
            data = request.data.copy()
            data["owner"] = request.user

            org = OrganizationService().create_organization(data)
            return Response(
                OrganizationSerializer(org).data,
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response({"error": str(e)}, status=400)

class OrganizationDetailAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, org_id):
        try:
            org = OrganizationService().get_organization(org_id)
            return Response(OrganizationSerializer(org).data)
        except Exception as e:
            return Response({"error": str(e)}, status=404)

    def put(self, request, org_id):
        try:
            org = OrganizationService().update_organization(org_id, request.data)
            return Response(OrganizationSerializer(org).data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

    def delete(self, request, org_id):
        try:
            OrganizationService().delete_organization(org_id)
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
