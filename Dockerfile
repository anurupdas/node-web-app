FROM node:18 AS build
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src ./src
COPY tsconfig.json ./

RUN npm run build

FROM node:18-alpine
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY package*.json ./

RUN npm install --only=production

CMD ["node", "dist/app.js"]
EXPOSE 8080
