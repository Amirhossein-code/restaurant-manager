from .common import *

SECRET_KEY = "django-insecure-)hf=%kwj)utr&6!*k)#kq^o5by0=8i45#r7%u!o53)dcldx7a_"

DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {
    "default": {
        "ENGINE": "mysql.connector.django",
        "NAME": "restaurant",
        "USER": "root",
        "PASSWORD": "MO@142aheRTU",
        "HOST": "localhost",
        "PORT": "3306",
    }
}
