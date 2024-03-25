# !/bin/bash

echo "Apply database migrations"
python manage.py migrate --noinput 

echo "Collecting Static files"
python manage.py collectstatic --noinput

echo "making persian messages"
python manage.py makemessages -l fa 

echo "Compiling messages"
python manage.py compilemessages

exec "$@"
