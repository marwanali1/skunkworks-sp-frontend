# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /skunkworks-sp-frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /skunkworks-sp-frontend/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /skunkworks-sp-frontend/package.json
RUN npm install
RUN npm install react-scripts

# start app
CMD ["npm", "start"]