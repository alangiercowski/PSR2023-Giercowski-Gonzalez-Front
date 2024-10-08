FROM node:16-alpine AS build
 
WORKDIR /app
 
COPY . .
 
RUN npm install
 
RUN npm run build
 
FROM nginx:alpine
 
COPY --from=build /app/dist/app/ /usr/share/nginx/html
 
EXPOSE 80