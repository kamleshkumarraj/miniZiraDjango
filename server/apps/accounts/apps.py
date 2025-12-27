from django.apps import AppConfig

class AccountsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.accounts"   # ✅ MUST be this
    label = "accounts"       # ✅ Optional but recommended
