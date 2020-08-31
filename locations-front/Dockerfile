FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install --save-dev @angular-devkit/build-angular
RUN npm install
COPY . .

EXPOSE 4200
CMD [ "ng", "serve", "--Host", "0.0.0.0" ]