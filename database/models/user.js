const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = {
	username: String,
	password: String
}

const User = mongoose.model('User', UserSchema)

module.export = User;
