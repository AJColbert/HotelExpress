var path = require("path");
var db = require("../models");

module.exports = function(app) {
  // Load index page
  // Start hamad
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  //end hamad

  //start Daryll - Route for booking page/form
  app.get("/book", function(req, res) {
    res.render(path.join(__dirname, "../views/forms"));
  });

  app.get("/guests", function(req, res) {
    res.render(path.join(__dirname, "../views/guests"));
  });

  //end Daryll

  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
