var db = require("../models");

module.exports = function (app) {
    // post recipe
    app.post("/api/recipes", function (req, res) {
        console.log("api recipes hit")
        db.Recipe.create(req.body).then(function (dbRecipe) {
            res.json(dbRecipe);
        });
    });

    //delete recipe by id
    app.delete("/api/recipes/:id", function (req, res) {
        db.Recipe.destroy({
          where: {
            id: req.params.id
          }
        }).then(function (dbRecipe) {
          res.json(dbRecipe);
        });
      });

      // get all recipes
      app.get("/api/recipes", function (req, res) {

        db.Recipe.findAll({
        }).then(function (dbRecipe) {
          res.json(dbRecipe);
        });
      });

    // get select recipe by id
      app.get("/api/recipes/:id", function (req, res) {
        db.Recipe.findOne({
            where: {
              id: req.params.id
            },
          }).then(function (dbRecipe) {
            res.json(dbRecipe);
          });
      });



}
