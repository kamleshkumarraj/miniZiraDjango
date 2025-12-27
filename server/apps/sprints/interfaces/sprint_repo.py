from abc import ABC, abstractmethod


class ISprintRepository(ABC):

    @abstractmethod
    def create(self, data):
        pass

    @abstractmethod
    def get_by_id(self, sprint_id):
        pass

    @abstractmethod
    def list_by_project(self, project):
        pass

    @abstractmethod
    def get_active_sprint(self, project):
        pass

    @abstractmethod
    def update(self, sprint, data):
        pass

    @abstractmethod
    def delete(self, sprint):
        pass
