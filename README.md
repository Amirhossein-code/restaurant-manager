# 🍽️ Simple Restaurant Menu Website

**🔺 Description:**
A production ready restaurant menu website with essential features that allow the admin to define items, categorize them, define ingredients for the items, and specify the food values of each item.

**🔺 Key Features:**

- Superusers can define items, categories, ingredients, and food values for each item.
- The Django admin panel is available for super users in Persian.
- User registration is disabled as only super users are expected to enter and modify the data.
- The user model has been customized to support username and password.

**⏭️ Tech Stack:**

- **Backend:** Python, Django, Django Rest Framework
- **Production and Deployment:** Docker, Docker-Compose for containerization, Gunicorn for WSGI HTTP Server,
  Nginx for serving frontend and media files, Whitenoise for serving static files, MySQL databse
- **Deployment:** Ubuntu VPS

**⌨️ Backend Developer:** Amirhossein Edadi

**📺 Frontend:** Frontend collaborator Amin Sheikh Azimi is working on the frontend of the project.

## Usage and Deployment

1. **🌀 Clone the Project**: First, clone the project using Git clone:

```
git clone https://github.com/Amirhossein-code/restaurant-menu-manager.git
```

2. **⚙️ Configure Environment Variables**: Next, configure the `.env` file with the necessary credentials..

   - Generate a new Production Secret Key for enhanced security.(You may use https://djecrety.ir/)
   - Update the Database Credentials as you like
   - Adjust the Allowed Hosts, CORS settings, and DOMAIN to match the domain you will be using.
     For local development, keep them as localhost (default settings) for testing purposes.

3. **🏗️ Build and Run**: Build and run the project using the following command:

```
docker-compose up --build -d
```

4. **🦸 Creating Super User**: To create a super user, open a terminal inside the Django container:

```
docker exec -it django /bash/sh
```

Then create the super user with the command:

```
python manage.py createsuperuser
```

Follow the prompts to enter the necessary credentials.

5. **🔑 Access Admin Panel**: Exit the terminal and login to the admin panel at:

localhost:8000/admin
