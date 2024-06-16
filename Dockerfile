# Stage 1: Build the React app with Vite
FROM node:17-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app using Vite
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the built files from the build stage to the Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html


