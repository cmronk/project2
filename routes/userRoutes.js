var db = require("../models");

module.exports = function(app) {
  // Get all stories
  app.get("/api/user", function(req, res) {
    db.Storyboard.findAll({}).then(function(dbStoryboard) {
      res.json(dbStoryboard);
    });
  });

  // Create a new story
  app.post("/api/user", function(req, res) {
    db.Storyboard.create(req.body).then(function(dbStoryboard) {
      res.json(dbStoryboard);
    });
  });

  app.put("/api/user", function(req, res) {
    db.Storyboard.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbStoryboard) {
      res.json(dbStoryboard);
    });
  });
  // Delete a story by id
  app.delete("/api/user/:id", function(req, res) {
    db.Storyboard.destroy({ where: { id: req.params.id } }).then(function(
      dbStoryboard
    ) {
      res.json(dbStoryboard);
    });
  });
};
