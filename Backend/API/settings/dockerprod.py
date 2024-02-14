from .common import *
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")

DEBUG = False

DATABASES = {
    "default": {
        "ENGINE": "mysql.connector.django",
        "NAME": os.getenv("MYSQL_DATABASE"),
        "USER": os.getenv("MYSQL_USER"),
        "PASSWORD": os.getenv("MYSQL_PASSWORD"),
        "HOST": os.getenv("DB_HOST_DOCKER", "db"),
        "PORT": os.getenv("DB_PORT_DOCKER"),
    }
}

ALLOWED_HOSTS = ["restaurant.complexalmas.ir"]
