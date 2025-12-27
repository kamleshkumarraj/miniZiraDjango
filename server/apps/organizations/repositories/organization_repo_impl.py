from apps.organizations.models import Organization
from apps.organizations.interfaces.organization_repo import IOrganizationRepository


class OrganizationRepository(IOrganizationRepository):

    def create(self, data):
        return Organization.objects.create(**data)

    def get_by_id(self, org_id):
        return Organization.objects.filter(id=org_id).first()

    def get_by_domain(self, domain):
        return Organization.objects.filter(domain=domain).first()

    def list_all(self):
        return Organization.objects.all()

    def update(self, organization, data):
        for key, value in data.items():
            setattr(organization, key, value)
        organization.save()
        return organization

    def delete(self, organization):
        organization.delete()
