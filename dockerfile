# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the TypeScript project (if applicable)
RUN npm run build

# Expose the application port
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
