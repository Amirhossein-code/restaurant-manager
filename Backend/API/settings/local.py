from .common import *
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = "django-insecure-)hf=%kwj)utr&6!*k)#kq^o5by0=8i45#r7%u!o53)dcldx7a_"

DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {
    "default": {
        "ENGINE": "mysql.connector.django",
        "NAME": os.environ["DB_NAME"],
        "USER": os.environ["DB_USER"],
        "PASSWORD": os.environ["DB_PASSWORD"],
        "HOST": os.environ["DB_HOST_LOCAL"],
        "PORT": os.environ["DB_PORT_LOCAL"],
    }
}
