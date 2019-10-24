var db = require("../models");

module.exports = function (app) {
    //post comment
    app.post("/api/comments", function (req, res) {
      console.log(req.body);
      
        db.Comment.create(req.body).then(function (dbComment) {
            res.json(dbComment);
          });
    });
    //delete comment by id
    app.delete("/api/comments/:id", function (req, res) {
      db.Comment.destroy({
        where: {
          id: req.params.id
        }
      }).then(function (dbComment) {
        res.json(dbComment);
      });
    });
    // get all comments
    app.get("/api/comments", function (req, res) {

      db.Comment.findAll({
      }).then(function (dbComment) {
        res.json(dbComment);
      });
    });

    //  find recipes comments by RecipeId
    app.get("/api/recipes/:id/comments", function (req, res) {

      db.Comment.findAll({
        where: {
          RecipeId: req.params.id
        },
      }).then(function (dbComment) {
        res.json(dbComment);
      });
    });

   


}
