from django.contrib.auth import authenticate
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.mail import send_mail
from rest_framework_simplejwt.tokens import RefreshToken

from apps.accounts.repositories.user_repo_impl import UserRepository
from apps.accounts.interfaces.auth_service import IAuthService


class AuthService(IAuthService):

    def __init__(self):
        self.repo = UserRepository()
        self.token_generator = PasswordResetTokenGenerator()

    def register(self, data):
        user = self.repo.create_user(data)
        return user

    def login(self, email, password):
        user = authenticate(email=email, password=password)
        if not user:
            raise Exception("Invalid credentials")

        refresh = RefreshToken.for_user(user)
        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }

    def forgot_password(self, email):
        user = self.repo.get_by_email(email)
        if not user:
            return

        token = self.token_generator.make_token(user)

        reset_link = f"http://frontend/reset-password?token={token}&uid={user.id}"

        send_mail(
            "Reset Password",
            f"Click here: {reset_link}",
            "noreply@myzira.com",
            [email],
        )

    def reset_password(self, user, token, new_password):
        if not self.token_generator.check_token(user, token):
            raise Exception("Invalid token")

        user.set_password(new_password)
        user.save()
