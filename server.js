const express = require('express');
const heltmet = require('helmet');
const logger = require('morgan');

const userRoutes = require('./routes/userRoutes');

const server = express();

server.use(express.json());
server.use(heltmet());
server.use(logger('dev'));

server.use('/api/users', userRoutes);

server.get('/', (req, res) => {
   res.send("<h1>Hello, it works.</h1>");
});

module.exports = server;