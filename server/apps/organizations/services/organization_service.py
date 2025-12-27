from django.db import transaction
from apps.organizations.repositories.organization_repo_impl import OrganizationRepository


class OrganizationService:

    def __init__(self):
        self.repo = OrganizationRepository()

    @transaction.atomic
    def create_organization(self, data):
        try:
            existing = self.repo.get_by_domain(data.get("domain"))
            if existing:
                raise ValueError("Organization with this domain already exists")

            return self.repo.create(data)

        except Exception as e:
            raise Exception(f"Organization creation failed: {str(e)}")

    def get_organization(self, org_id):
        try:
            org = self.repo.get_by_id(org_id)
            if not org:
                raise ValueError("Organization not found")
            return org
        except Exception as e:
            raise Exception(str(e))

    def list_organizations(self):
        try:
            return self.repo.list_all()
        except Exception as e:
            raise Exception(str(e))

    @transaction.atomic
    def update_organization(self, org_id, data):
        try:
            org = self.repo.get_by_id(org_id)
            if not org:
                raise ValueError("Organization not found")

            return self.repo.update(org, data)

        except Exception as e:
            raise Exception(f"Organization update failed: {str(e)}")

    @transaction.atomic
    def delete_organization(self, org_id):
        try:
            org = self.repo.get_by_id(org_id)
            if not org:
                raise ValueError("Organization not found")

            self.repo.delete(org)

        except Exception as e:
            raise Exception(f"Organization delete failed: {str(e)}")
