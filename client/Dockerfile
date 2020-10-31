# אם ירצה השם
FROM node:current-slim

RUN mkdir -p /app/src

WORKDIR /app/src

COPY ["package*.json","./"]

RUN CI=true
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]