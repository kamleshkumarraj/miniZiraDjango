from abc import ABC, abstractmethod


class IIssueRepository(ABC):

    @abstractmethod
    def create(self, data):
        pass

    @abstractmethod
    def get_by_id(self, issue_id):
        pass

    @abstractmethod
    def list_by_project(self, project):
        pass

    @abstractmethod
    def list_by_sprint(self, sprint):
        pass

    @abstractmethod
    def update(self, issue, data):
        pass

    @abstractmethod
    def delete(self, issue):
        pass
