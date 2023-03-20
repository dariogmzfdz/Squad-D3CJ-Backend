FROM node:alpine
WORKDIR /usr/app/products
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src
CMD npm install && npm run deploy
