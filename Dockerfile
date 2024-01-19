FROM node:alpine
WORKDIR /usr/src/wiress-be
ENV NODE_ENV=dev
COPY package*.json ./
COPY .env.dev ./
RUN npm install
COPY ./src ./src
EXPOSE 9000
CMD [ "node", "./src/server.ts" ]