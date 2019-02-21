// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var inquirer = require("inquirer");
var bodyParser = require("body-parser");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.json);

// Requires and sets the HTML routes in this file
require('./FriendFinder/routing/htmlRoutes.js');

// Requires and sets the API routes in this file
require('./FriendFinder/routing/apiRoutes.js');
// FriendFinder\ routing\ apiRoutes.js


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
     console.log("App listening on PORT " + PORT);
});
