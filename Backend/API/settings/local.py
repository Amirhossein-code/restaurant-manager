from .common import *
from dotenv import load_dotenv

load_dotenv()
SECRET_KEY = "django-insecure-)hf=%kwj)utr&6!*k)#kq^o5by0=8i45#r7%u!o53)dcldx7a_"

DEBUG = True

ALLOWED_HOSTS = []

# if os.getenv("DJANGO_SETTINGS_FILE") == "API.settings.local":
#     DATABASES = {
#         "default": {
#             "ENGINE": "mysql.connector.django",
#             "NAME": "restaurant",
#             "USER": "root",
#             "PASSWORD": "MO@142aheRTU",
#             "HOST": "localhost",
#             "PORT": "3306",
#         }
#     }
if os.getenv("DJANGO_SETTINGS_FILE") == "API.settings.local":
    DATABASES = {
        "default": {
            "ENGINE": "mysql.connector.django",
            "NAME": os.environ.get("DB_NAME"),
            "USER": os.environ.get("DB_USER"),
            "PASSWORD": os.environ.get("DB_PASSWORD"),
            "HOST": os.environ.get("DB_HOST"),
            "PORT": os.environ.get("DB_PORT"),
        }
    }
