FROM node:current-alpine

RUN mkdir todo

COPY . todo

RUN cd todo

# RUN npm install

# RUN npm start