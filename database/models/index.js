const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/custom-react-boilerplate");

module.exports.Tutorial = require("./tutorial.js");
