from abc import ABC, abstractmethod


class IReportRepository(ABC):

    @abstractmethod
    def create(self, data):
        pass

    @abstractmethod
    def get_by_id(self, report_id):
        pass

    @abstractmethod
    def list_by_project(self, project):
        pass

    @abstractmethod
    def list_by_sprint(self, sprint):
        pass

    @abstractmethod
    def update(self, report, data):
        pass

    @abstractmethod
    def delete(self, report):
        pass
