from django.db import transaction
from apps.profiles.repositories.profile_repo_impl import ProfileRepository


class ProfileService:

    def __init__(self):
        self.repo = ProfileRepository()

    @transaction.atomic
    def create_profile(self, user, data):
        try:
            existing = self.repo.get_by_user(user)
            if existing:
                raise ValueError("Profile already exists")

            return self.repo.create(user, data)

        except Exception as e:
            raise Exception(f"Profile creation failed: {str(e)}")

    def get_my_profile(self, user):
        try:
            profile = self.repo.get_by_user(user)
            if not profile:
                raise ValueError("Profile not found")
            return profile
        except Exception as e:
            raise Exception(str(e))

    def get_by_employee_id(self, employee_id):
        try:
            profile = self.repo.get_by_employee_id(employee_id)
            if not profile:
                raise ValueError("Profile not found")
            return profile
        except Exception as e:
            raise Exception(str(e))

    @transaction.atomic
    def update_profile(self, user, data):
        try:
            profile = self.repo.get_by_user(user)
            if not profile:
                raise ValueError("Profile not found")

            return self.repo.update(profile, data)

        except Exception as e:
            raise Exception(f"Profile update failed: {str(e)}")

    @transaction.atomic
    def delete_profile(self, user):
        try:
            profile = self.repo.get_by_user(user)
            if not profile:
                raise ValueError("Profile not found")

            self.repo.delete(profile)

        except Exception as e:
            raise Exception(f"Profile delete failed: {str(e)}")
