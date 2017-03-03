// server.js
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

var app = express();
var controllers = require('./database/controllers');
var db = require("./database/models");

// serve our static stuff like index.css
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

// api routes
app.get('/api', controllers.api.index);
app.get('/api/tutorials', controllers.tutorials.index);
app.get('/api/users', controllers.users.index);

// Enable CORS from client-side
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// route catch all
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

// port
app.set('port', (process.env.PORT || 6969));
app.listen(app.get('port'), function () {
    console.log('Server has started! http://localhost:' + app.get('port') + '/');
});
