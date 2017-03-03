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

app.get('/api', controllers.api.index);

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})


app.set('port', (process.env.PORT || 6969));
app.listen(app.get('port'), function () {
    console.log('Server has started! http://localhost:' + app.get('port') + '/');
});
