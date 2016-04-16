const Router = module.exports = function() {
  this.routes.GET = {},
  this.routes.POST = {},
  this.routes.PUT = {},
  this.routes.PATCH = {},
  this.routes.DELETE = {}
};

Router.prototype.get = function(routeName, statusCode, contentType, write, cb) {

  function callbackName(req, res) {
    statusCode = statusCode || 200;
    contentType = contentType || 'text/plain';
    write = write || 'Recieved GET';
    statusCode = parseInt(statusCode); // eslint-disable-line radix
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.write(write);
    res.end();
  }
  cb = callbackName;
  this.routes.GET[routeName] = cb;
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
  return function(request, response) {
    var routeFunction = this.routes[request.method][request.url];
    if (typeof routeFunction === 'function') {
      return routes[request.method][request.url](request, response);
    }
    response.writeHead(404);
    response.write('404 Not Found');
    response.end();
  }
}
