// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  //Routes for the recipe model
  app.get("/api/recipes", function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));
  });

  app.post("/api/recipes", function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));
  });
};