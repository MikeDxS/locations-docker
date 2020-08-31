FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install -g @angular/cli
RUN npm install --save-dev @angular-devkit/build-angular
RUN npm install
RUN npm run build
WORKDIR /usr/src/app/dist/locations-front
RUN npm install -g live-server
EXPOSE 8080
CMD [ "live-server" ]