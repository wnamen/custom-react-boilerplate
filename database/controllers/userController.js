// TODO: Import database for users
// TODO: Create the logic for api to handle a request and create a JWT
// TODO: Need to add bcrypt & Passport jwt ( there might be anther thing to use )
// NOTE: This file is just of single auth for 1 user, create separte file for other user logic
// NOTE: This will just be an api because React and Redux will handle everything on the front end

const userJWT = {
	username: "Benny Jam",
	password: "KingBenjaminThe4th",
	created_at: "Date Huuurrr",
	jwt: "alksdfjalkfjdsiqopurewpqiruwealskjdf"
}

function index(req, res){
	res.json({message: "Brah Why we no use ES6 when we are compiling our code anyways!"})
}


module.exports = userJWT;
