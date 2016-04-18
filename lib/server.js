const http = require('http');
const Router = require(__dirname + '/router.js');


const practiceRouter = new Router();
http.createServer(practiceRouter.route()).listen(3000, () => console.log('server up'));
practiceRouter.routes;
// practice with input values for GET
practiceRouter.get('/moose', 210, 'text/plain', 'Hello Kat', 'cb');

// practice with default values for GET
practiceRouter.get('/cat');

// practice with POST using individualized post written in the response
practiceRouter.post('/tiger', '220', 'text/plain', 'anything expect for chunk');

// practice with POST using the sent data as what is written in the response
practiceRouter.post('/duck', '200', 'text/plain', 'chunk');

// practice and testing DELETE functionality
practiceRouter.delete('/delete', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('so much delete');
  res.end();
});

// practice and testing PUT functionality
practiceRouter.put('/put', (req, res) => {
  req.on('data', (chunk) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(chunk);
    res.end();
  });
});

// practice and testing PATCH functionality
practiceRouter.patch('/patch', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Patch up for what');
  res.end();
});
