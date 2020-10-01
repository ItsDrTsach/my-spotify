require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  //clean the token
  if (token.startsWith('bearer ')) {
    token = token.slice(7, token.length);
  }
  // verify and decode the token
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ success: false, message: 'unauthorized!' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(400).json({ message: 'JWT token must be supllied ' });
  }
};
