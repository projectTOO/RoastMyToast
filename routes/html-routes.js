// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.redirect("/user");
  });

  // user route loads user.html
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

    // post route loads comment.html
    app.get("/userpage", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/user-page.html"));
    });
  

  // recipe route loads recipe.html
  app.get("/recipe", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recipe.html"));
  });

  // post route loads comment.html
  app.get("/comment", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/comment.html"));
  });



};
