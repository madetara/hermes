FROM node:13.8

RUN npm install -g webpack webpack-cli

WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
RUN npm test

COPY . /app
RUN npm run build
