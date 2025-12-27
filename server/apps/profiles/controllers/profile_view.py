from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from apps.profiles.services.profile_service import ProfileService
from apps.profiles.serializers import ProfileSerializer


class MyProfileAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            profile = ProfileService().get_my_profile(request.user)
            return Response(ProfileSerializer(profile).data)
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_404_NOT_FOUND,
            )

    def post(self, request):
        try:
            profile = ProfileService().create_profile(
                request.user,
                request.data,
            )
            return Response(
                ProfileSerializer(profile).data,
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_400_BAD_REQUEST,
            )

    def put(self, request):
        try:
            profile = ProfileService().update_profile(
                request.user,
                request.data,
            )
            return Response(ProfileSerializer(profile).data)
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_400_BAD_REQUEST,
            )

    def delete(self, request):
        try:
            ProfileService().delete_profile(request.user)
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_400_BAD_REQUEST,
            )

class ProfileByEmployeeIdAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, employee_id):
        try:
            profile = ProfileService().get_by_employee_id(employee_id)
            return Response(ProfileSerializer(profile).data)
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_404_NOT_FOUND,
            )
