//imports libraries
require('dotenv').config();
const express = require('express');
const app = express();

//gloabl middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', require('./Routes/user'));

module.exports = app;
