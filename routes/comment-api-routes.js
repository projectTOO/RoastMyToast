// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  //Routes for the user model
  app.post("/api/comments", function (req, res) {
    console.log(req.body);

    // db.Comment.create(req.body).then(function (dbComment) {
    //     res.json(dbComment);
    //   });
  });
  // app.get("/api/user/:id/comments", function (req, res) {
  //     db.Comment.findOne({
  //         where: {
  //           user_id: req.params.id
  //         },
  //       }).then(function (dbComment) {
  //           // create row with body of request (the comment)
  //         dbComment.create(req.body);
  //         res.json(dbComment);

  //       });
  // });

  // app.post("/test", function)
};




