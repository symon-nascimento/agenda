FROM node:16.3.0-alpine

WORKDIR /app
COPY ./package.json ./
COPY ./dist ./

RUN apk update
RUN apk add busybox-extras
RUN apk add yarn
RUN yarn

EXPOSE 4000

CMD [ "node", "index.js" ]

