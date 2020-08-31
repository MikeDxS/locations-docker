FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i --only=dev && npm install
COPY . .

EXPOSE 4200
CMD [ "npm", "start" ]