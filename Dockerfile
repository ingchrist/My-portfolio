FROM mhart/alpine-node

WORKDIR /mnt/d/doc ingchristiandjin/ALL-IN-ONE-VS-CODING/react-portfolio/My-portfolio

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]



