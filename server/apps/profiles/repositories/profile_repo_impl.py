from apps.profiles.models import Profile
from apps.profiles.interfaces.profile_repo import IProfileRepository


class ProfileRepository(IProfileRepository):

    def create(self, user, data):
        return Profile.objects.create(user=user, **data)

    def get_by_user(self, user):
        return Profile.objects.filter(user=user).first()

    def get_by_employee_id(self, employee_id):
        return Profile.objects.filter(employee_id=employee_id).first()

    def update(self, profile, data):
        for key, value in data.items():
            setattr(profile, key, value)
        profile.save()
        return profile

    def delete(self, profile):
        profile.delete()
