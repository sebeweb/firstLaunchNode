const http = require('http');
const hostname = '127.0.0.1';
const port = '536';

const server = http.createServer(
        function(request, responce) {
            responce.statusCode = 200;
            responce.setHeader('Content-Type','text/plain');
            responce.end('Bonjour');
        }
);

server.listen(port, hostname, function () {
    console.log('le server ecoute http://'+hostname+":"+port);
});