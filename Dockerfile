# syntax=docker/dockerfile:1

FROM node:23-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

RUN npm install -g serve

COPY . .

RUN npm run build

EXPOSE 3000
EXPOSE 5173

# What the container should run when it is started.
CMD [ "serve", "-s", "dist" ]
