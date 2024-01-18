FROM node:18
WORKDIR /usr/src/wiress-be
ENV NODE_ENV=dev
COPY package*.json ./
COPY .env.dev ./
RUN npm install
COPY . .
EXPOSE 9000
CMD [ "node", "./server.ts" ]