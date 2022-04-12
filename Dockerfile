FROM node:16.14.2

WORKDIR /usr/src

COPY package.json .
COPY package-lock.json .

RUN npm install

EXPOSE 8080
CMD ["npm", "run", "serve"]
