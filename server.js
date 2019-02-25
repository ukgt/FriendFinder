// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// var inquirer = require("inquirer");
var bodyParser = require("body-parser");
// const apiRoutes = require('./FriendFinder/routing/apiRoutes');


// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// app.use("/public", express.static(__dirname + "/public"));
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json({ type: "application/vnd.api+json" }));
 // parse various different custom JSON types as JSON
 app.use(bodyParser.json({type: 'application/*+json'}));
 


// Requires and sets the HTML routes in this file
//const htmlRoutes =  require('./app/routing/htmlRoutes.js');

// Requires and sets the API routes in this file
// FriendFinder\ routing\ apiRoutes.js
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
     console.log("App listening on PORT " + PORT);
});
