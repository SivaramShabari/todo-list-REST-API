FROM node:latest

WORKDIR /server

COPY . .

RUN npm install

RUN npm install nodemon

EXPOSE 3300

CMD ['node',"index.js"]