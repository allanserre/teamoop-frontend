
FROM node:22-alpine3.21 AS builder
WORKDIR /app
COPY package*.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build --prod

FROM nginx:1.27.3-alpine
COPY --from=builder /app/dist/teamoop-frontend/browser /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
