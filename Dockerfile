FROM node:alpine
WORKDIR /usr/app
COPY ["package.json", "package-lock.json", "tsconfig.json", "./"]
COPY ./src ./src
RUN npm install
RUN npm run tsc
CMD npm run start