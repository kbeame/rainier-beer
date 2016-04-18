const http = require('http');
const Router = require(__dirname + '/router.js');


const practiceRouter = new Router();
http.createServer(practiceRouter.route()).listen(3000, () => console.log('server up'));

// practice with input values for GET
practiceRouter.get('/moose', 210, 'text/plain', 'Hello Kat', 'cb');

// practice with default values for GET
practiceRouter.get('/cat');


practiceRouter.post('/tiger', '220', 'text/plain', 'monkeybutt');

practiceRouter.post('/duck', '270', 'text/plain', 'chunk');

// This is the type of post is not working
// practiceRouter.post('/trian', '200', 'text/plain', 'crime', function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   req.on('data', (chunk) => {
//     res.write(chunk);
//     return res.end();
//   });
// });
// this type of post is also not working
// practiceRouter.post('/fun');
