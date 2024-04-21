FROM node:20 As Production

ENV NODE_ENV=Production

WORKDIR /usr/src/client

COPY package.json . 
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD [ "sh", "-c", "npm run dev:production" ]

