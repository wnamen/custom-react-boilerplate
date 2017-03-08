// TODO: Add passport & passport-jwt & passport-local (auth) - DONE
// TODO: Then set up local strategy with passport
// TODO: Add jsonwebtoken & crypto (auth)

// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;;

const app = express();
const controllers = require('./database/controllers');
const db = require("./database/models");

// serve our static stuff like index.css
app.use(express.static(__dirname));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize());

// api routes
app.get('/api', controllers.api.index);
app.get('/api/tutorials', controllers.tutorials.index);
app.get('/api/user', controllers.user.index);
app.post('/api/user/login', controllers.user.login)

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
