module.exports = function(app, db) {

    app.get('/', function(req, res) {
      // set {raw: true} to return plain json instead of sequelize objects
      const pets = db.pet.findAll({
        raw: true,
        include: db.user
      })
      const users = db.user.findAll({
        raw: true,
        include: db.pet
      })

      Promise.all([pets, users])
        .then(function(result) {
          console.log(result)
          res.render('index', {
            pets: result[0],  // pets
            users: result[1], // users
          })
        })
    })

    // async version:
    /*
    app.get('/', function(req, res) {
      try {
        const pets = await db.pet.findAll({raw: true})
        const users = await db.user.findAll({raw: true})

        res.render('index', {
          pets: pets,
          users: users,
        })

      } catch (error) {
        throw error;
      }
    })
    */

}