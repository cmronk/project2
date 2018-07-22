var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.storyboard.findAll({}).then(function(dbStoryboard) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbStoryboard
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/main/:id", function(req, res) {
    db.Storyboard.findOne({
      where: { id: req.params.id }
    }).then(function(dbStoryboard) {
      res.render("main", {
        example: dbStoryboard
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
