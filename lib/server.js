const http = require('http');
const Router = require(__dirname + '/router.js');


const practiceRouter = new Router();
http.createServer(practiceRouter.route()).listen(3000, () => console.log('server up'));
practiceRouter.routes;
// practice with input values for GET
practiceRouter.get('/moose', 210, 'text/plain', 'Hello Kat', 'cb');

// practice with default values for GET
practiceRouter.get('/duck');
