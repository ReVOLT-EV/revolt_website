# Use Node LTS
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# For dev: run Next.js in dev mode (hot reload)
CMD ["npm", "run", "dev"]

# Next.js dev server default port
EXPOSE 3000
