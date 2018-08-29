FROM node:8

# Prepare app directory
RUN mkdir -p /app
WORKDIR /app/

# Install dependencies
RUN yarn

ADD . /app/

EXPOSE 8081
CMD [ "yarn", "start" ]