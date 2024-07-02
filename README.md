#Secrets_NodeProject

[Steps to use Jenkins to get project code from github and run app]

Touch Dockerfile

Contents of Dockerfile:

# Start from the Jenkins base image
FROM jenkins/jenkins:lts

# Switch to the root user to install additional packages
USER root

# Install Node.js and npm
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs

# Switch back to the Jenkins user
USER jenkins


# Build the Docker image
docker build -t my-jenkins .

# Run the Docker container
docker run -p 8080:8080 -p 50000:50000 -p 3000:3000 my-jenkins


(need to expose and map port 3000 for the Node.js application to be accessible from outside the container)

Access Jenkins: Open your web browser and go to http://localhost:8080

need to access the shell of your running Jenkins container. You can do this using the docker exec command.

docker exec -it <container_name_or_id> bash

cat /var/jenkins_home/secrets/initialAdminPassword
This command will output the initial admin password directly in your terminal.


Build steps in execute shell in project:

cd $WORKSPACE
npm install  # Install dependencies
node index.js  # Run the app with node


http://localhost:3000 to access the app.
