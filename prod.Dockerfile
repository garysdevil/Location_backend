FROM node:12.4.0-alpine 
WORKDIR /srv/Location_backend
COPY package.json /srv/Location_backend
## --registry=https://registry.npm.taobao.org
RUN cd /srv/Location_backend
RUN npm i && npm run start