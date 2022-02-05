FROM node:14

RUN mkdir /app
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .
