FROM node:20

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "dev" ]



