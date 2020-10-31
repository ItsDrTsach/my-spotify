//imports libraries
require("dotenv").config();
const express = require("express");
const logger = require("./helpers/logger");
const app = express();
const cors = require("cors");
const checktoken = require("./helpers/checktoken");

//gloabl middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//my logger
app.use(logger);

//user routh is exposed since he does not need a token
app.use("/users", require("./Routes/user"));

//check if token is valid, and updating it
// app.use(require('./helpers/ensureToken'));

// expose the api
app.use("/api", checktoken, require("./api"));

//handle invalid endpoints
app.use(require("./helpers/unknownEndpoint"));

//handle errors
app.use(require("./helpers/errorHandler"));

module.exports = app;
