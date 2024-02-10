from .common import *

SECRET_KEY = os.environ["SECRET_KEY"]

DEBUG = False

ALLOWED_HOSTS = ["complexalmas.ir"]

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
