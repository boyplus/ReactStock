FROM node:alpine AS builder
WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn --prod
COPY ./ ./
RUN yarn build
EXPOSE 3030
CMD [ "node", "./build/main.js" ]