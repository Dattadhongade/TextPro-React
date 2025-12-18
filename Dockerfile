# =========================
#  BUILD STAGE
# =========================
FROM node:18-alpine AS build

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build Vite app
RUN npm run build

# =========================
#  PRODUCTION STAGE
# =========================
FROM nginx:alpine

# Copy build output to nginx folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
