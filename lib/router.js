const Router = module.exports = function() {
  this.routes = {
  'POST': {},
  'GET': {},
  'PUT': {},
  'PATCH': {},
  'DELETE': {}
  };
};

Router.prototype.get = function(routeName, statusCode, contentType, write, cb) {
  cb = function callbackName(req, res) {
    console.log('res ' + res);
    console.log('req ' + req);
    statusCode = statusCode || 200;
    contentType = contentType || 'text/plain';
    write = write || 'Recieved GET';
    statusCode = parseInt(statusCode); // eslint-disable-line radix
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.write('' + write);
    res.end();
  };

  this.routes.GET[routeName] = cb;
  return this;
};

Router.prototype.post = function(routeName, cb) {
  this.routes.POST[routeName] = cb;
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

Router.prototype.patch = function(routeName, cb) {
  this.routes.DELETE[routeName] = cb;
  return this;
};

Router.prototype.route = function() {
  var routes = this.routes;
  return function(req, res) {
    if (typeof routes[req.method][req.url] === 'function')
      return routes[req.method][req.url](req, res);
    res.writeHead(404);
    res.write('404 Not Found');
    res.end();
  };
};
