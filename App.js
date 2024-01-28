var http = require('http'); //This is to 'include' the http module

http.createServer(function(req, res)
{
    res.writeHead(200, {'Content-type': 'text/html'});
    var pr = require('./modules/print_request');
    pr.print_request(req,res);
    res.end('Hello World!');
}).listen(8080);