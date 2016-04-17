const http = require('http');
const Router = require(__dirname + '/router.js');


const practiceRouter = new Router();
http.createServer(practiceRouter.route()).listen(3000, () => console.log('server up'));

// practice with input values for GET
practiceRouter.get('/moose', 210, 'text/plain', 'Hello Kat', 'cb');

// practice with default values for GET
practiceRouter.get('/cat');

// practiceRouter.post('/duck', 'cb');

practiceRouter.post('/tiger', '220', 'text/plain', 'monkeybutt', 'cb');

practiceRouter.post('/duck', '200', 'text/plain', 'chunk', 'cb');

// This is the only type that is not working /train
practiceRouter.post('/trian', function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  req.on('data', (chunk) => {
    res.write(chunk);
    return res.end();
  });
});
