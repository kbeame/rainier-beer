const Router = module.exports = function() {
  this.routes = {
  'POST': {},
  'GET': {},
  'PUT': {},
  'PATCH': {},
  'DELETE': {}
  };
};

Router.prototype.get = function(routeName, statusCode, contentType, write) {
  function callbackName(req, res) {
      statusCode = statusCode || 200;
      contentType = contentType || 'text/plain';
      write = write || 'Recieved GET';
      statusCode = parseInt(statusCode); // eslint-disable-line radix
      res.writeHead(statusCode, { 'Content-Type': contentType });
      res.write('' + write);
      res.end();
    }

  this.routes.GET[routeName] = callbackName;
  return this;
};

Router.prototype.post = function(routeName, statusCode, contentType, write) {

    function callbackPost(req, res) {
      statusCode = statusCode || 200;
      statusCode = parseInt(statusCode); // eslint-disable-line radix
      contentType = contentType || 'text/plain';
      res.writeHead(statusCode, { 'Content-Type': contentType });
      req.on('data', (chunk) => {
        if (write === 'chunk') {
          res.write(chunk);
        } else {
          res.write(write);
        }
        return res.end();
      });
    }
  this.routes.POST[routeName] = callbackPost;
  return this;
};

Router.prototype.put = function(routeName, cb) {
  this.routes.PUT[routeName] = cb;
  return this;
};

Router.prototype.patch = function(routeName, cb) {
  this.routes.PATCH[routeName] = cb;
  return this;
};

Router.prototype.delete = function(routeName, cb) {
  this.routes.DELETE[routeName] = cb;
  return this;
};

Router.prototype.route = function() {
  var routes = this.routes;
  return function(req, res) {
    if (typeof routes[req.method][req.url] === 'function') {
      return routes[req.method][req.url](req, res);
    }
    res.writeHead(404);
    res.write('404 Not Found');
    res.end();
  };
};
