# syntax=docker/dockerfile:1

FROM node:22-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

# What the container should run when it is started.
CMD [ "npm", "run", "start:host" ]
