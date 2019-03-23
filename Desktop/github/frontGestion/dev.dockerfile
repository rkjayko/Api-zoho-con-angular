#Base image of node
FROM registry.gitlab.com/cidenet/docker-images/angular-cli:7.3.1

# Working dir for the app
WORKDIR /app

# Port app
EXPOSE 4200
# Port livereload
EXPOSE 49153
