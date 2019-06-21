FROM node:12.4.0-alpine 
WORKDIR /var/jenkins_home/workspace/Location_backend
COPY package.json ./
## --registry=https://registry.npm.taobao.org
RUN npm i