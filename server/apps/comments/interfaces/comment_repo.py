from abc import ABC, abstractmethod


class ICommentRepository(ABC):

    @abstractmethod
    def create(self, data):
        pass

    @abstractmethod
    def get_by_id(self, comment_id):
        pass

    @abstractmethod
    def list_by_issue(self, issue):
        pass

    @abstractmethod
    def update(self, comment, data):
        pass

    @abstractmethod
    def soft_delete(self, comment):
        pass
