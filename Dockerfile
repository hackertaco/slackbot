FROM node:12.16.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN cd /usr/src/app

COPY . /usr/src/app
RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
