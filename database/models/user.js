const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = {
	firstName: String,
	lastName: String,
	email: {
    type: String,
    index: { unique: true }
  },
	password: String
}

module.export = mongoose.model('User', UserSchema);
