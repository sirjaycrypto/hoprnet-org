# build environment
FROM node:12
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install --silent
RUN yarn global add react-scripts@3.0.1 -g --silent
COPY . /app
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]