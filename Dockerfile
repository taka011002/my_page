FROM node:13.1.0-alpine

WORKDIR /usr/src

COPY package.json .
COPY package-lock.json .

RUN apk update && \
    npm install -g npm @vue/cli

EXPOSE 8080
CMD ["/bin/sh"]
