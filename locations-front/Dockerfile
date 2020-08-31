FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install -g @angular/cli
RUN npm install -g live-server
RUN npm install -f
RUN npm run build
WORKDIR /usr/src/app/dist/locations-front
EXPOSE 8080
CMD [ "live-server" ]