require('dotenv').config();
const userRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const {
  registerValidation,
  loginValidation,
} = require('../helpers/validation');
const formatDate = require('../helpers/formatDate');

userRouter.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  //Vaildate the DATA before we create a user
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(406).json({ message: error.details[0].message });
  }

  try {
    //check if email already exist
    const emailExist = await User.findOne({ where: { email } });
    if (emailExist) {
      return res.status(400).json({ message: 'email already exists' });
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      createdAt: formatDate(new Date()),
      updatedAt: formatDate(new Date()),
    });

    res.status(201).json({
      message: 'sucssesfully created new User',
      data: {
        id: newUser.id,
        name: newUser.name,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

userRouter.post('/valid', (req, res) => {
  jwt.verify(req.body.token, process.env.SECRET_KEY, (error, data) => {
    if (error) {
      return res.status(403).json({ message: error });
    }
    res.json({ valid: true, isAdmin: data.isAdmin });
  });
});

userRouter.post('/login', async (req, res) => {
  const { email, password, rememberToken } = req.body;

  //Vaildate the DATA before we checking user
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(406).json({ message: error.details[0].message });
  }
  try {
    //finding the user according to the email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'email does not exists' });
    }
    // validate password
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass)
      return res.status(403).json({ message: 'Invalid password' });

    const newToken = {
      isAdmin: user.isAdmin,
      user: user.email,
      userId: user.id,
    };
    if (!rememberToken) {
      newToken.exp = Math.floor(Date.now() / 1000 + 60 * 30);
    }
    const token = jwt.sign(newToken, process.env.SECRET_KEY);
    res.cookie('token', token);
    res.cookie('isAdmin', user.isAdmin);
    res.cookie('name', user.name);
    res.cookie('user', user.email);
    res.json({ message: `welcome back ${user.name}` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = userRouter;
