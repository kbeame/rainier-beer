const http = require('http');

const server = module.exports = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/goodroute') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Custom message');
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/goodroute') {
  req.on('data', (data) => {
    var parsed = JSON.parse(data);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('something here');
    return res.end();
  });
  return;
}

res.writeHead(404, { 'Content-Type': 'text/html' });
res.write('<h1>Error 404 </h1>');
return res.end();
});

server.listen(3000, () => process.stdout.write('server up on 3000'));
