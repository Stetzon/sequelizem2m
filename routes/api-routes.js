module.exports = (app, db) => {

  app.post("/pets", async (req, res) => {
      const pet = await db.pet.create({name: req.body.name});
      await pet.addUser(req.body.user, {through: {role: req.body.role}});

      res.json(pet)
  });

  app.patch("/pets", async (req, res) => {
      const pet = await db.pet.findOne({where: {id: req.body.pet}});
      await pet.addUser(parseInt(req.body.user), {through: {role: req.body.role}});

      res.json(pet);
  });

  app.post("/users", async (req, res) => {
      const user = await db.user.create({name: req.body.name});

      res.json(user);
  });
}