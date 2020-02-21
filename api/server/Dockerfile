FROM node:13.8 as build

WORKDIR /app
COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app
RUN yarn build

FROM build as test

CMD ["yarn", "test"]

FROM build as deploy

EXPOSE 80

CMD ["node", "/app/dist"]
