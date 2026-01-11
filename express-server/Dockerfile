# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose port 8001
EXPOSE 8001

# Start the application
CMD [ "yarn", "start" ]