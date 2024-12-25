FROM node:23-alpine3.20
WORKDIR /user/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm","run", "dev" ]