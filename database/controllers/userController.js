// TODO: Import database for users - DONE
// TODO: Create the logic for api to handle a request and create a JWT
// TODO: Need to add bcrypt & Passport jwt ( there might be anther thing to use ) - DONE
// NOTE: This file is just of single auth for 1 user, create separte file for other user logic
// NOTE: This will just be an api because React and Redux will handle everything on the front end

const db = require("../models");
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/main');

const userJWT = {
	first: "Benny",
	last: "Jam",
	email: "bj@gmail.com",
	password: "KingBenjaminThe4th",
	created_at: "Date Huuurrr",
	jwt: "alksdfjalkfjdsiqopurewpqiruwealskjdf"
}

index = (req, res) => {
	res.json({message: "Brah Why we no use ES6 when we are compiling our code anyways!"});
};

signup = (req, res) => {
  if(!req.body.email || !req.body.password) {
    res.json({ success: false, message: 'Please enter email and password.' });
  } else {
    let newUser = new db.User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    });

    // Attempt to save the user
    newUser.save((err) => {
      if (err) {
        return res.json({ success: false, message: 'That email address already exists.'});
      }
      res.json({ success: true, message: 'Successfully created new user.' });
    });
  }
};

login = (req, res) => {
	// console.log(req.body);
	// res.send('success')

	db.User.findOne({
		email: req.body.email
	}, (err, user) => {
		if (err) throw err;

		if (!user) {
			res.send({ success: false, message: 'Authentication failed. User not found.' });
		} else {
			// Check if password matches
			user.comparePassword(req.body.password, (err, isMatch) => {
				if (isMatch && !err) {
					// Create token if the password matched and no error was thrown
					let token = jwt.sign(user, config.secret, {
						expiresIn: 10080 // in seconds
					});
					res.json({ success: true, token: 'JWT ' + token });
				} else {
					res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
				}
			});
		}
	});
}


module.exports = {
	index: index,
	signup: signup,
	login: login
};
