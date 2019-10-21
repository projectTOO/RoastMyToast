var db = require("../models");

module.exports = function (app) {
    //for the user comment table
    app.post("/api/comments", function (req, res) {
      console.log(req.body);
      
        db.Comment.create(req.body).then(function (dbComment) {
            res.json(dbComment);
          });
    });

    // test

   

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


}