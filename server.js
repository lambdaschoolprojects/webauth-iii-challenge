const express = require('express');
const heltmet = require('helmet');
const logger = require('morgan');

const server = express();

server.use(express.json());
server.use(heltmet());
server.use(logger('dev'));

server.get('/', (req, res) => {
   res.send("<h1>Hello, it works.</h1>");
});

module.exports = server;