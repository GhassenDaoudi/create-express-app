FROM node:18-alpine3.17

RUN apk --no-cache add git

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --production --loglevel verbose

COPY . .

CMD ["npm", "start"]