FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @nestjs/cli
RUN npm install

EXPOSE 5000
CMD [ "npm", "start" ]