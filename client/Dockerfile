# Step 1: Build the frontend or backend app
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the app (adjust the build command as per your framework)
RUN npm run build && ls -al /app/build

# Step 2: Set up Nginx and copy the built app files to Nginx's default directory
FROM nginx:alpine

# Remove the default Nginx index.html to serve your own content
RUN rm -rf /usr/share/nginx/html/*

# Copy the built application files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 so the container can listen on this port
EXPOSE 80

# Start Nginx in the foreground to keep the container running
CMD ["nginx", "-g", "daemon off;"]
