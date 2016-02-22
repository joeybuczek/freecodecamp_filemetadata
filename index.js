// modules
var express = require('express');
var multer = require('multer'); // learn about multer 2-21-16

// routes
var routes = require('./routes');

// server
var app = express();

// use routes
app.use('/', routes);

// listen
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Now listening on port " + port);
});