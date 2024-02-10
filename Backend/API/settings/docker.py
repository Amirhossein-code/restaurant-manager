from .common import *


SECRET_KEY = "django-insecure-)hf=%kwj)utr&6!*k)#kq^o5by0=8i45#r7%u!o53)dcldx7a_"

DEBUG = True

DATABASES = {
    "default": {
        "ENGINE": "mysql.connector.django",
        "NAME": os.environ["MYSQL_DATABASE"],
        "USER": os.environ["MYSQL_USER"],
        "PASSWORD": os.environ["MYSQL_PASSWORD"],
        "HOST": os.environ["DB_HOST"],
        "PORT": os.environ["DB_PORT"],
    }
}
ALLOWED_HOSTS = os.environ.get("DJANGO_ALLOWED_HOSTS").split(" ")
