var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.write('First row\n')
  res.end('Hello Http\n');
});
server.listen(8080);
