const express = require("express");

const Router = require("./animalCrossing/animalCrossing-router.js");

const server = express();

server.use(express.json());
server.use("/api/villagers", Router);

module.exports = server;
