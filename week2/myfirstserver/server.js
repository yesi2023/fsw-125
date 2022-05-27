/* ********************************************************************************************************************
* Create a server that has at least 3 unique endpoints (for example: /movies,  /actors, etc)
* Each endpoint should send back a different array of objects when tested.
* Endpoints should follow the design principles of REST.
* No frontend is required, the endpoints can be tested in the browser or in Postman by requesting to the localhost port.
************************************************************************************************************************ */

//My First Server Code:
const express = require('express');
const app = express();

const PORT = 3000;

let favGames = 
[
{ name: 'Roblox', theme: 'Style', rating: '5' },
{ name: 'Pokemon', theme: 'Competitive', rating: '6'},
{ name: 'Mitopia', theme: 'Fighting', rating: '8' },
];

let gameName = 
[
{ name: 'Roblox'},
{ name: 'Pokemon'},
{ name: 'Mitopia'},
];

let themeName = 
[
{ theme: 'Style'},
{ theme: 'Competitive'},
{ theme: 'Fighting'},
];

let rated = 
[
{ rating: '5'},
{ rating: '6'},
{ rating: '8'},
];

app.get('/', (req, res) => {
    res.send('Hello World! Please, try these end points: favGames, gameName, themeName, and rated.');

}); 

app.get('/favGames', (req, res) => {
    res.send(favGames);

}); 

app.get('/favGames/:gameName', (req, res) => {
    res.send(gameName);

}); 

app.get('/favGames/:gameName/:themeName', (req, res) => {
    res.send(themeName);

}); 

app.get('/favGames/:gameName/:themeName/:rated', (req, res) => {
    res.send(rated);

}); 

//server start logic

app.listen(PORT, () => {
    console.log('App started on port: ${PORT}')

});