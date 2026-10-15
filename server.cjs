const http = require('node:http');

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify({ service: 'native-buildpack-proof', healthy: true }));
}).listen(Number(process.env.PORT || 8080), '0.0.0.0');
