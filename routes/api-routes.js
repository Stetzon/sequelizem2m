module.exports = function(app, db) {

  app.post("/pets", function (req, res) {
    db.pet.create({
      name: req.body.name,
    })
      .then(function(pet) {
        // note that if the following fails, we will want to throw an error and remove the pet
        pet.addUser(req.body.user, {
          through: {roleId: req.body.role}
        }).then(function() {
          res.json(pet);
        })
      })
      .catch(function(err) {
        throw err;
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

  app.post("/roles", function (req, res) {
    db.role.create({
      name: req.body.name,
    })
      .then(function(role) {
        res.json(role);
      })
      .catch(function(err) {
        res.error(err.message);
      });
  });
}