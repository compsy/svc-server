FROM node:8

WORKDIR /app
RUN mkdir /service

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
