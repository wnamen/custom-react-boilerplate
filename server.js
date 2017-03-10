// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const controllers = require('./database/controllers');
const db = require("./database/models");
const config = require('./database/config/main');
const app = express();

// serve our static stuff like index.css
app.use(express.static(__dirname));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize());

// Middleware to require login/auth
const passportService = require('./database/config/passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

// Enable CORS from client-side
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// api routes
app.get('/api', controllers.api.index);
app.get('/api/tutorials', controllers.tutorials.index);
app.get('/api/user', controllers.user.index);
app.post('/api/user/signup', controllers.user.signup)
app.post('/api/user/login', requireLogin, controllers.user.login)

// route catch all
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

// port
app.set('port', (process.env.PORT || 6969));
app.listen(app.get('port'), () => {
    console.log('Server has started! http://localhost:' + app.get('port') + '/');
});
