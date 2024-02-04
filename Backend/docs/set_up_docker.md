# Project Setup Instructions

## Setup Environment Variables

Create a `.env` file in the same directory as `manage.py` and add the following credentials(You can enter anything):

```
MYSQL_ROOT_PASSWORD=
MYSQL_DATABASE=restaurant
MYSQL_USER=
MYSQL_PASSWORD=

DB_PORT=3306
DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 [::1]
```

## Build and Run Docker Containers

Run the following command to build and run Docker containers:
```
docker-compose up --build
```
This command will build your Docker containers according to the specifications in the `docker-compose.yml` file and start your application.

## Creating Admin User

To create an admin user for your Django application, follow these steps:

1. Identify the backend container by running:

    ```
    docker ps
    ```

    Note the container ID or name of the backend container.

2. Run the following command to enter the container's shell:

    ```
    docker exec -it <container_id_or_name> bash
    ```

    Replace `<container_id_or_name>` with the actual container ID or name you noted earlier.

3. Once inside the container's shell, run the following command to create a superuser:

    ```
    python manage.py createsuperuser
    ```

    Follow the prompts to enter the username, email, and password for the superuser.

4. After creating the superuser, exit the container's shell by typing:

    ```
    exit
    ```

This concludes the setup process. You can now access your Django application and log in with the created admin credentials.
the application should be running now
