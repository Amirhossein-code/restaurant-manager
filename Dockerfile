# Use a lightweight web server image
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d/

# Copy the static files into the nginx directory
COPY Frontend /usr/share/nginx/html

# Copy django static file that are going to be served with nginx at port 8000
COPY Backend/static /usr/share/nginx/static

# Expose port 80 to the outside world
EXPOSE 80 
