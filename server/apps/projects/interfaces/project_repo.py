from abc import ABC, abstractmethod


class IProjectRepository(ABC):

    @abstractmethod
    def create(self, data):
        pass

    @abstractmethod
    def get_by_id(self, project_id):
        pass

    @abstractmethod
    def list_by_org(self, organization):
        pass

    @abstractmethod
    def list_by_workspace(self, workspace):
        pass

    @abstractmethod
    def update(self, project, data):
        pass

    @abstractmethod
    def delete(self, project):
        pass
