FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
RUN npm install

EXPOSE 4200
CMD [ "npm", "start" ]