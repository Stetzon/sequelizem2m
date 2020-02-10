module.exports = (app, db) => {

    formatSequelizeArray = (seqArr) => {
      return seqArr.map((seqObj) => {
        return seqObj.toJSON();
      });
    };

    app.get('/', async (req, res) => {
      const users = await db.user.findAll({include: db.pet});
      const pets  = await db.pet.findAll({include: db.user});

      res.render('index', {
        users: formatSequelizeArray(users),
        pets: formatSequelizeArray(pets),
      });
    });
}