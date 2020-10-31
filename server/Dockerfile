FROM node:current-slim

ENV NODE_ENV=development
ENV PORT=5000

RUN mkdir -p /src/app

WORKDIR /app/src

COPY ["package*.json","./"]

RUN npm install 

COPY . .

EXPOSE 5000

CMD ["node", "start.js"]

