//Dependencies
var http = require('http');
var fs = require('fs');

//Sets port to 8080
var PORT = 8080;

//Create our server
var server = http.createServer(handleRequest);

//Creates a function for handling the requests coming into the server
function handleRequest(request, response){
     fs.readFile(__dirname+'/index.html', function(err, data){
         response.writeHead(200, {'Content-type':'text/html'});
         response.end(data);
     });
}

server.listen(PORT, function(){
    console.log('Server is listening on http://localhost:'+PORT);
})