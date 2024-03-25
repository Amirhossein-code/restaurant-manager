# Use an official Python runtime as a parent image
FROM python:3.10

# Set environment variables to optimize Python runtime behavior
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install gettext for internationalization support
RUN apt-get update && apt-get install -y gettext

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the entrypoint script into the container
COPY entrypoint.sh /app/entrypoint.sh

# Copy the project code into the container
COPY . /app/

# Specify the entrypoint script to be executed when the container starts
ENTRYPOINT ["sh", "/app/entrypoint.sh"]

# Expose port 8000 to allow external connections
EXPOSE 8000
