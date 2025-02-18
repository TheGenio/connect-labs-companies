# Step 1: Build the Vite project using Bun
FROM oven/bun AS builder

# Set working directory
WORKDIR /app

# Copy package.json and bun.lockb
COPY package.json bun.lockb ./

# Install dependencies using Bun
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