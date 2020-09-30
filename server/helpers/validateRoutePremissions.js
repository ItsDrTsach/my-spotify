module.exports = (req, res, next) => {
  req.isAdmin
    ? next()
    : res.status(403).json({
        message: 'forbidden route, you need admin premisiions for that',
      });
};
