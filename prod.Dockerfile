FROM node:12.4.0-alpine 
WORKDIR /srv/Location_backend
COPY package.json ./
RUN npm i