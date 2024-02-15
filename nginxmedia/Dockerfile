# Use a lightweight web server image
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d/

# Expose port 80 to the outside world
EXPOSE 8001
