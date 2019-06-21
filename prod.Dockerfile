FROM node:12.4.0-alpine 
WORKDIR /srv/Location_backend
COPY . ./
## --registry=https://registry.npm.taobao.org
RUN npm i