FROM node:18-bookworm AS builder
 
COPY package*.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]
