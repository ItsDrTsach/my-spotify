const userRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

userRouter.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
});

module.exports = userRouter;
