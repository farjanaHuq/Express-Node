var express = require("express");
var path = require("path");
var axios = require('axios');

var app = express();
var PORT = 8080;

// Initialize client
// var webAuth = new auth0.WebAuth({
//     domain:       'dev-9tabcska.auth0.com',
//     clientID:     'voOkhCijKjDAHv2i75KJZwCwTLHst2W5'
//   });

// webAuth.signup({
//     connection: 'Username-Password-Authentication',
//     email: 'fa.huq03@gmail.com',
//     password: 'PASSWORD',
//     username: "johndoe",
//     given_name: "John",
//     family_name: "Doe",
//     name: "John Doe",
//     nickname: "johnny",
//     picture: "http://example.org/jdoe.png",
//     user_metadata: { plan: 'silver', team_id: 'a111' }
//      }, function (err) {
//     if (err) return alert('Something went wrong: ' + err.message);
//       return alert('success signup without login!')
// });

//Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  // res.send("This a test server.");
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get("/login", function (req, res) {
  // res.send("This a test server.");
  res.sendFile(path.join(__dirname, 'login.html'));
});
app.get("/myapp", function (req, res) {
  // res.send("This a test server.");
  res.sendFile(path.join(__dirname, 'myapp.html'));
});

// axios.post('https://dev-9tabcska.auth0.com/dbconnections/signup', {
//     client_id: "voOkhCijKjDAHv2i75KJZwCwTLHst2W5",
//     email: "farzio13@yahoo.com",
//     password: "blackDiamond22",
//     connection: "Username-Password-Authentication",
//     username: "johndoe",
//     given_name: "John",
//     family_name: "Doe",
//     name: "John Doe",
//     nickname: "johnny",
//     picture: "http://example.org/jdoe.png",
//     user_metadata: { plan: "silver", team_id: "a111"}
//     }).then(function (response) {
//         console.log(response);
//     }).catch(function (error) {
//         console.log(error);
//     });

app.get('/callback', function(req, res){
      res.send('You have been logged out.');
});

//Listener
app.listen(PORT, function () {
  console.log("App is listening on http://localhost:" + PORT);
});



//res.send("User signup"
    // client_id: "voOkhCijKjDAHv2i75KJZwCwTLHst2W5",
    // email: "fa.huq03@gmail.com",
    // password: "PASSWORD",
    // connection: "Username-Password-Authentication",
    // username: "johndoe",
    // given_name: "John",
    // family_name: "Doe",
    // name: "John Doe",
    // nickname: "johnny",
    // picture: "http://example.org/jdoe.png",
    // user_metadata: { plan: "silver", team_id: "a111" },
