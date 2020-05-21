//Load Data
var tableData = require('../data/tableData');
var waitListData = require("../data/waitingList");

//Routing

module.exports = function(app){
    app.get("/api/tables", function(req, res) {
        res.json(tableData);
    });
    
    app.get("/api/waitlist", function(req, res) {
        res.json(waitListData);
    });

    app.post("/api/tables", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        if (tableData.length < 5) {
          tableData.push(req.body);
          res.json(true);
        }
        else {
          waitListData.push(req.body);
          res.json(false);
        }
    });

    app.post("/api/tables", function(req, res) {
        // The "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        if (tableData.length < 5) {
          tableData.push(req.body);
          res.json(true);
        }
        else {
          waitListData.push(req.body);
          res.json(false);
        }
    });
    


    
    
}