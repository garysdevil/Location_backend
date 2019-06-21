FROM node:12.4.0-alpine 
WORKDIR /var/Location_backend
COPY package.json /var/Location_backend
## --registry=https://registry.npm.taobao.org
RUN npm i