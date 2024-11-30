# Stage 1: Build Stage
FROM node:18 AS build
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application source code
COPY ./src ./src
COPY tsconfig.json ./

# Compile TypeScript to JavaScript
RUN npm run build

# Stage 2: Production Stage
FROM node:18-alpine
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app/dist ./dist
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Set the command to run the application
CMD ["node", "dist/app.js"]
EXPOSE 3000
