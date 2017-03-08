// TODO: Import database for users - DONE
// TODO: Create the logic for api to handle a request and create a JWT
// TODO: Need to add bcrypt & Passport jwt ( there might be anther thing to use ) - DONE
// NOTE: This file is just of single auth for 1 user, create separte file for other user logic
// NOTE: This will just be an api because React and Redux will handle everything on the front end

const db = require("../models");
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

login = (req, res) => {
	console.log(req.body);
	res.send('success')
}

module.exports = {
	index: index,
	login: login
};
