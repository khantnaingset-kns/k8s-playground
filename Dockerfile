FROM node:21-alpine3.17

WORKDIR /app

COPY . /app

RUN npm install --only-production

CMD [ "npm", "start" ]

