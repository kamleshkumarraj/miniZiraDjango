from abc import ABC, abstractmethod


class ITeamRepository(ABC):

    @abstractmethod
    def create(self, data):
        pass

    @abstractmethod
    def get_by_id(self, team_id):
        pass

    @abstractmethod
    def list_by_org(self, organization):
        pass

    @abstractmethod
    def update(self, team, data):
        pass

    @abstractmethod
    def delete(self, team):
        pass
