var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  //--START DARYLL---
  app.post("/api/book", function(req, res) {
    console.log(req.body);
    db.booking.create({
      checkInDate: req.body.checkInDate,
      checkOutDate: req.body.checkOutDate,
      specialRequests: req.body.specialRequests
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
  //--END DARYLL---
  
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
