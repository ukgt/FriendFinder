// Dependencies
var express = require('express');
var path = require("path");
var htmlRouter = express.Router();

// Exports the variable

     //  home page
     htmlRouter.get('/', function (req, res) {
          res.sendFile(path.join(__dirname, '../public/home.html'));
     });

     //  about page
     htmlRouter.get('/survey', function (req, res) {
          res.sendFile(path.join(__dirname, '../public/survey.html'));
     });

module.exports = htmlRouter;