// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // get all users
  app.get("/api/users", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    db.User.findAll({
      include: [db.Recipe, db.Comment]
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // get user by id
  app.get("/api/users/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  // add new user
  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  // delete user by id
  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // get user's recipes
  app.get("/api/users/:id/recipes", function (req, res) {
    db.Recipe.findOne({
      where: {
        UserId: req.params.id
      },
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });


};