from abc import ABC, abstractmethod


class IWorkspaceRepository(ABC):

    @abstractmethod
    def create(self, data):
        pass

    @abstractmethod
    def get_by_id(self, workspace_id):
        pass

    @abstractmethod
    def list_by_org(self, organization):
        pass

    @abstractmethod
    def update(self, workspace, data):
        pass

    @abstractmethod
    def delete(self, workspace):
        pass
