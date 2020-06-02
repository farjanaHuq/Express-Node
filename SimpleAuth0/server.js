var express = require("express");
var path = require("path");
var axios = require('axios');

var app = express();
var PORT = 8080;

//Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Endpoint to serve the configuration file
// app.get("/auth_config.json", (req, res) => {
//   res.sendFile(join(__dirname, "auth_config.json"));
// });

app.get("/", function (req, res) {
  // res.send("This a test server.");
  res.sendFile(path.join(__dirname, './public/home.html'));
});
app.get("/signup", function (req, res) {
  // res.send("This a test server.");
  res.sendFile(path.join(__dirname, './public/signup.html'));
});

app.get("/login", function (req, res) {
  // res.send("This a test server.");
  res.sendFile(path.join(__dirname, './public/login.html'));
});
app.get("/myapp", function (req, res) {
  // res.send("This a test server.");
  res.sendFile(path.join(__dirname, 'public/myapp.html'));
});


//Listener
app.listen(PORT, function () {
  console.log("App is listening on http://localhost:" + PORT);
});




