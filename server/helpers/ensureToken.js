require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  //get the token header which sent by the client
  const clientToken = req.headers['authorization'];

  //check if token is valid token
  if (typeof clientToken !== 'undefined') {
    jwt.verify(clientToken, process.env.SECRET_KEY, (error, data) => {
      if (error) {
        return res.status(403).json({ message: error });
      }
      console.log(data);
      const newToken = {
        isAdmin: data.isAdmin,
        user: data.user,
        userId: data.userId,
      };
      if (!data.rememberToken) {
        newToken.exp = Date.now() / 1000 + 60 * 30;
      }
      const token = jwt.sign(newToken, process.env.SECRET_KEY);
      req.isAdmin = data.isAdmin;
      req.userEmail = data.user;
      req.userId = data.userId;
      res.cookie('token', token);
      next();
    });
  } else {
    res.status(403).json({ message: 'token is required' });
  }
};
