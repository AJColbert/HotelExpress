var db = require("../models");
module.exports = function(app) {

// start get
  app.get("/api/guests", function (req, res) {
    if (req.params.id) {
      db.guests.findById(req.params.id).then(function (guest) {
        res.json(guest);
      });
    } else {
      db.guests.findAll({}).then(function (guest) {
        res.json(guest);
      });
    }
  });

  // end get

// start post
  app.post("/api/guests", function (req, res) {
    db.guests.create(req.body).then(function (guest) {
      res.json(guest);
    });
  });
  // end post

// start put
  app.put("/api/guests", function (req, res) {
    // Use the sequelize update method to update a todo to be equal to the value of req.body
    // req.body will contain the id of the todo we need to update
    db.guests.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (guest) {
        res.json(guest);
      });
  });
// end put

// start delete
  app.delete("/api/guests/:id", function(req, res) {
    db.guests.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(guest) {
      res.json(guest);
    });
  });
  // end delete
};