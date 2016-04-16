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

  function callbackName(req, res) {
    debugger;
    console.log('res ' + res);
    console.log('req ' + req);
    statusCode = statusCode || 200;
    contentType = contentType || 'text/plain';
    write = write || 'Recieved GET';
    statusCode = parseInt(statusCode); // eslint-disable-line radix
    debugger;
    res.writeHead(statusCode, { 'Content-Type': contentType });
    debugger;
    console.log(res.writeHead);
    res.write('' + write);
    res.end();
  }
  debugger;
  cb = callbackName();
  this.routes.GET[routeName] = cb;
  console.log('cb ' + cb);
  return this;
};

Router.prototype.post = function(routeName, cb) {
  this.routes.GET[routeName] = cb;
  return this;
};

Router.prototype.put = function(routeName, cb) {
  this.routes.GET[routeName] = cb;
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
    var routeFunction = this.routes[req.method][req.url];
    if (typeof routeFunction === 'function') {
      debugger;
      return routes[req.method][req.url](req, res);
    }
    res.writeHead(404);
    res.write('404 Not Found');
    res.end();
  };
};
