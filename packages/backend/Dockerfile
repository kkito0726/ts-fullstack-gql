FROM node:20.1.0

ARG BUILD_DIR=/home/build

WORKDIR ${BUILD_DIR}/backend

EXPOSE 5555

COPY ./packages/backend/package.json .

RUN apt-get update \
 && apt-get install -y openssl \ 
 && npm i \ 
 && npx prisma generate

COPY ./packages/backend ${BUILD_DIR}/backend

# CMD [ "node", "./dist/index.js" ]
