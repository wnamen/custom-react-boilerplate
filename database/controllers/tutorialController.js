
/************
 * DATABASE *
 ************/
const db = require("../models");

function index(req, res) {
  db.Tutorial.find({}, function(err, tutorials) {
    res.json(tutorials);
  });

}

module.exports = {
  index: index
};
