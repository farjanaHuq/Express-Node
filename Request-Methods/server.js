var http = require('http');
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    //Saving the request data as a variable
    var requestData = '';

    //When the server receives the data..
    req.on('data', function(data){
        //Add it to requestData
        requestData+= data;
    });

    //When the request has ended...
    req.on('end', function(data){
    // Log (server-side) the request method, as well as the data received!
    console.log("You did a", req.method, "method with the data: ", requestData);
    res.end(data);
    });

}

//Start our server
server.listen(PORT, function(){
    console.log('Server is listening on http://localhost:'+PORT);
})