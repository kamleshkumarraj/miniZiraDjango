from abc import ABC, abstractmethod


class IUserRepository(ABC):

    @abstractmethod
    def create_user(self, data: dict):
        pass

    @abstractmethod
    def get_by_email(self, email: str):
        pass

    @abstractmethod
    def update_avatar(self, user, avatar):
        pass
