# Stage 1: Build the React app
FROM node:17-alpine AS builder
WORKDIR /react-app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY src /.src
COPY public ./public
RUN npm run build

# Stage 2: Serve the built application
FROM nginx:alpine
COPY --from=builder /react-app/build /usr/share/nginx/html
