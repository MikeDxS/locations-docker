FROM node
COPY package*.json ./
RUN npm install -g @nestjs/cli
RUN npm install
COPY . .

EXPOSE 5000
CMD [ "npm", "start" ]