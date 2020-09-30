const logger = (req, res, next) => {
  next();
  console.log(
    '-------------------------------------------my logger--------------------------------------------'
  );
  console.log(req.method);
  console.log('request ip', req.ip);
  console.log('request hostname: ', req.hostname);
  console.log('request originalUrl: ', req.originalUrl);
  console.log('request baseUrl: ', req.baseUrl);
  console.log('request path: ', req.path);
  console.log('body: ', req.body);
  console.log('params: ', req.params);
  console.log('query: ', req.query);
  console.log(('headers', req.headers));
};

module.exports = logger;
