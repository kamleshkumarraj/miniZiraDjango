from abc import ABC, abstractmethod


class IProfileRepository(ABC):

    @abstractmethod
    def create(self, user, data):
        pass

    @abstractmethod
    def get_by_user(self, user):
        pass

    @abstractmethod
    def get_by_employee_id(self, employee_id):
        pass

    @abstractmethod
    def update(self, profile, data):
        pass

    @abstractmethod
    def delete(self, profile):
        pass
