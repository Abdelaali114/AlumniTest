# Step 1: Build the frontend or backend app
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the app (for frontend, this usually means running 'npm run build')
RUN npm run build

# Step 2: Set up Nginx and copy the built app files to Nginx's default directory
FROM nginx:alpine AS stage-1

# Install Nginx (it is usually pre-installed in the nginx:alpine image, but you can ensure it's installed)
RUN apk update && apk add nginx

# Remove the default Nginx index.html to serve your own content
RUN rm -rf /usr/share/nginx/html/*

# Copy the built application files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 so the container can listen on this port
EXPOSE 3000

# (Optional) Copy a custom nginx.conf if you have one
# COPY nginx.conf /etc/nginx/nginx.conf

# Start Nginx in the foreground to keep the container running
CMD ["nginx", "-g", "daemon off;"]

