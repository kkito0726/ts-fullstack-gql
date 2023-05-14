FROM node:16.13.2

ARG BUILD_DIR=/home/build

COPY ./packages/frontend ${BUILD_DIR}/frontend

WORKDIR ${BUILD_DIR}/frontend

EXPOSE 3000

RUN npm i vite

# CMD [ "npm", "run", "dev" ]
