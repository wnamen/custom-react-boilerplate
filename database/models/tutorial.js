var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TutorialSchema = new Schema({
  name: String,
  url: String
});

var Tutorial = mongoose.model('Tutorial', TutorialSchema);

module.exports = Tutorial;
