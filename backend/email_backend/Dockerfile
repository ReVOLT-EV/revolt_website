FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Start your backend with server.js
CMD ["npx", "nodemon", "server.js"]

EXPOSE 4000

