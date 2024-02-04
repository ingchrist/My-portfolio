FROM node:20

WORKDIR /mnt/d/doc ingchristiandjin/ALL-IN-ONE-VS-CODING/react-portfolio/My-portfolio

COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]



