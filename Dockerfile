FROM node:18-alpine
WORKDIR /TO_DO_WEB
COPY . .
EXPOSE 3000
CMD yarn install --production && \
    yarn start

