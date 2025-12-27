from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

from apps.accounts.services.auth_service_impl import AuthService
from apps.accounts.serializers import (
    RegisterSerializer,
    LoginSerializer,
    AvatarSerializer,
)


class RegisterAPI(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = AuthService().register(serializer.validated_data)
        return Response({"message": "User registered"})


class LoginAPI(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        tokens = AuthService().login(
            serializer.validated_data["email"],
            serializer.validated_data["password"],
        )
        return Response(tokens)


class ForgotPasswordAPI(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        AuthService().forgot_password(request.data.get("email"))
        return Response({"message": "If email exists, reset link sent"})


class ResetPasswordAPI(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        user_id = request.data.get("uid")
        token = request.data.get("token")
        new_password = request.data.get("password")

        from apps.accounts.models import User

        user = User.objects.get(id=user_id)
        AuthService().reset_password(user, token, new_password)

        return Response({"message": "Password reset successful"})


class UploadAvatarAPI(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request):
        serializer = AvatarSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = request.user
        user.avatar = serializer.validated_data["avatar"]
        user.save()

        return Response({"message": "Avatar updated"})
