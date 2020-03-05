/**
 * Server for a menu list
 * Author: Sebastian Bonilla
 * 04/03/2020
 */

var express = require('express');
var JSONReader = require('./JSONReader/JSON_reader.js');

var app = express();
var port = 3010;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //grant access to everyone
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send(JSONReader.getMenu());
});

app.listen(port, function () {
  console.log('Running server on ' + port);
});