//Dependencies
var express = require('express');
var path = require('path');

//Set up the Express app 
var app = express();
var PORT = 8080;

//Set up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Star Wars Characters (Data)
// var yoda = {
//     name: 'Yoda',
//     role: 'Jedi Master',
//     age: 900,
//     forcePoints: 2000
// };

// var darthmaul = {
//     name: 'Darth Maul',
//     role: 'Sith Lord',
//     age: 200,
//     forcePoints: 1200
// };

// var obiWanKenobi = {
//     name: 'Obi Wan Kenobi',
//     role: 'Jedi Knight',
//     age: 500,
//     forcePoints: 3500
// }

//Star Wars Characters (Data)
var characters = [{
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000
},
{    
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200
},
{   
    routeName: 'obiWanKenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Knight',
    age: 500,
    forcePoints: 3500
}]

//Routes
// app.get('/', function(req, res){
//     res.send('Welcome to the Star Wars Page!');
// });

// app.get('/yoda', function(req,res){
//     res.json(yoda);
// });

// app.get('/darthmaul', function(req, res){
//     res.json(darthmaul);
// });

// app.get('/obiWanKenobi', function(req, res){
//     res.json(obiWanKenobi);
// });

// app.get('/:character', function(req,res){
//     var chosen = req.params.character;
//     console.log(chosen);
//     res.end();
// });
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'view.html'));
});
app.get("/add", function(req, res){
    res.sendFile(path.join(__dirname, 'add.html'));
});
app.get("/all", function(req, res){
    res.sendFile(path.join(__dirname, 'all.html'));
});

app.get('/api/characters', function(req, res){
    return res.json(characters);
});
app.get('/api/characters/:character', function(req, res){
    var chosen = req.params.character;
    console.log(chosen);
    for(var char of characters){
        if(chosen===char.routeName){
            return res.json(char);
        }
    }
    return res.send('No character found');
});

//Create new character with JSON input
app.post('/api/characters', function(req, res){
    var newCharacter = req.body;
    console.log(newCharacter);
    characters.push(newCharacter);
    res.json(newCharacter);

});

//Listener
app.listen(PORT, function(){
    console.log("App is listening on http://localhost:"+PORT);
})