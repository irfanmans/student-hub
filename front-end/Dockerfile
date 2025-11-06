# Gunakan image Node.js
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy semua file dan install dependency
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage production
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
