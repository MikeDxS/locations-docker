FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
RUN npm install @angular-devkit/build-angular
COPY . .

EXPOSE 4200
CMD [ "ng", "serve", "--Host", "0.0.0.0" ]