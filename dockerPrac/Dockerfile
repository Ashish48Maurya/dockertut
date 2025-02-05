FROM node:23-alpine3.20
WORKDIR /user/src/app
COPY package*.json ./
RUN npm install
COPY . .
# EXPOSE 3000 

EXPOSE 7000 
# app is running on port 7000 inside the container , so we need to expose it to the host machine
CMD [ "npm","start" ]