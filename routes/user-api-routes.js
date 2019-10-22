// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/api/users", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    db.User.findAll({
      include: [db.Recipe, db.Comment]
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Recipe, dbComment]
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

};