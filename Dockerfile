# Use a lightweight web server image
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d/

# Copy the static files into the nginx directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80 
EXPOSE 8001