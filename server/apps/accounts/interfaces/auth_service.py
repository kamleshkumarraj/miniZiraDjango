from abc import ABC, abstractmethod


class IAuthService(ABC):

    @abstractmethod
    def register(self, data: dict):
        pass

    @abstractmethod
    def login(self, email: str, password: str):
        pass

    @abstractmethod
    def forgot_password(self, email: str):
        pass

    @abstractmethod
    def reset_password(self, token: str, new_password: str):
        pass
