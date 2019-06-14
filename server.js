const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger("dev"));
server.use(cors());

server.use("/api", userRoutes);

server.get("/", (req, res) => {
  res.send("<h1>Hello, it works.</h1>");
});

module.exports = server;
