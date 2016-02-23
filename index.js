// modules
var express = require('express');

// routes
var routes = require('./routes');

// server
var app = express();

// use routes
app.use('/', routes);

// 404 errors
app.use(function(req, res){
    res.send('404 - Sorry, cannot be found.');
});

// listen
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Now listening on port " + port);
});