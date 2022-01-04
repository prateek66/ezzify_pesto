FROM node

WORKDIR /app/admin

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4003


CMD ["npm","start"]