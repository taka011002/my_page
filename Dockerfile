FROM node:16.14.2

WORKDIR /usr/src

COPY package.json .
COPY package-lock.json .

RUN npm install -g npm @vue/cli

EXPOSE 8080
CMD ["npm", "run", "serve"]
