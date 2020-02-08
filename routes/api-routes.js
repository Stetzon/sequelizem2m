module.exports = function(app, db) {

  app.post("/pets", function (req, res) {
    db.pet.create({
      name: req.body.name,
    })
      .then(function(pet) {
        res.json(pet);
      })
      .catch(function(err) {
        res.error(err.message);
      });
  });

  app.post("/users", function (req, res) {
    db.user.create({
      name: req.body.name,
    })
      .then(function(user) {
        res.json(user);
      })
      .catch(function(err) {
        res.error(err.message);
      });
  });
}