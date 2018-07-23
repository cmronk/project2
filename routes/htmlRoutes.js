var db = require("../models");
module.exports = function(app) {

  // Load index page
  // commenting out this for now
  app.get("/", function(req, res) {
    db.Storyboard.findAll({}).then(function(dbStoryboard) {
      res.render("index", {
        // this line isn't currently doing anything fam/ need apiroutes for users
        Users: dbStoryboard,
        Storyboards: dbStoryboard
      });
    });
  });
  // Load example page and pass in an example by id
  app.get("/main/:id", function(req, res) {
    db.Storyboard.findOne({
      where: { id: req.params.id }
    }).then(function(dbStoryboard) {
      res.render("main", {
        Storyboards: dbStoryboard
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
