# Dockerfile for language-identification-application-ui

# Stage 1: Build the React application
FROM node:14-alpine AS ui-builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using NGINX
FROM nginx:alpine

# Copy the built app from the previous stage into the NGINX image
COPY --from=ui-builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX to serve the application
CMD ["nginx", "-g", "daemon off;"]

