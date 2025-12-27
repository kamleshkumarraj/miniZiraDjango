from apps.accounts.models import User
from apps.accounts.interfaces.users_repo import IUserRepository


class UserRepository(IUserRepository):

    def create_user(self, data):
        return User.objects.create_user(**data)

    def get_by_email(self, email):
        return User.objects.filter(email=email).first()

    def update_avatar(self, user, avatar):
        user.avatar = avatar
        user.save()
        return user
