var http = require('http');
var fs = require('fs');

//Sets the port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    var path = req.url;

    switch(path){
        case '/food':
            return fs.readFile(__dirname+'/food.html', function(err, data){
                res.writeHead(200, {'Content-type': 'text/html'});
                res.end(data);
            });
        case '/movies':
            return fs.readFile(__dirname+'/movies.html', function(err, data){
                res.writeHead(200, {'Content-type':'text/html'});
                res.end(data);
            });
        case '/frameworks':
            return fs.readFile(__dirname+'/frameworks.html', function(err,data){
                res.writeHead(200, {'Content-type':'text/html'});
                res.end(data);
            });
        default :
            return fs.readFile(__dirname+'/index.html', function(err,data){
                 res.writeHead(200, {'Content-type':'text/html'});
                 res.end(data);
            });
    }
}

//Starts server
server.listen(PORT, function(){
    console.log('Server is listening on http://localhost:'+PORT);
})