FROM node:alpine AS builder
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install --prod
COPY ./ ./
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80