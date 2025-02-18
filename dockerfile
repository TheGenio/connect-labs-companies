# Step 1: Build the Vite project
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN bun install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build the project
RUN bun run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy the built project from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
