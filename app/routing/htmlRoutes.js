// Dependencies
//var express = require('express');
var path = require("path");
//var htmlRouter = express.Router();

// Exports the variable
module.exports = function(app){

     //  home page
     app.get('/', function (req, res) {
          res.sendFile(path.join(__dirname, '/../public/home.html'));
     });

     //  survey page
     app.get('/survey', function (req, res) {
          res.sendFile(path.join(__dirname, "/../public/survey.html"));
     });

     //  //  survey page
     //  htmlRouter.get('/about', function (req, res) {
     //       res.sendFile(path.join(__dirname, '../public/survey.html'));
     //  });
}