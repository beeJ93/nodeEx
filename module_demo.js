var http = require('http');
var dt = require('./datemodule');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("date and time : " + dt.myDate());
    res.end();
}).listen(3000);