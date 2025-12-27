from abc import ABC, abstractmethod


class IOrganizationRepository(ABC):

    @abstractmethod
    def create(self, data):
        pass

    @abstractmethod
    def get_by_id(self, org_id):
        pass

    @abstractmethod
    def get_by_domain(self, domain):
        pass

    @abstractmethod
    def list_all(self):
        pass

    @abstractmethod
    def update(self, organization, data):
        pass

    @abstractmethod
    def delete(self, organization):
        pass
