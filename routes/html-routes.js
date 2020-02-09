module.exports = function(app, db) {

    app.get('/', function(req, res) {
      // set {raw: true} to return plain json instead of sequelize objects
      const pets = db.pet.findAll({raw: true})
      const users = db.user.findAll({raw: true})
      const roles = db.role.findAll({raw: true})

      Promise.all([pets, users, roles])
        .then(function(result) {
          res.render('index', {
            pets: result[0],
            users: result[1],
            roles: result[2]
          })
        })
    })

    // async version:
    /*
    app.get('/', function(req, res) {
      try {
        const pets = await db.pet.findAll({raw: true})
        const users = await db.user.findAll({raw: true})
        const roles = await db.role.findAll({raw: true})

        res.render('index', {
          pets: pets,
          users: users,
          roles: roles
        })

      } catch (error) {
        throw error;
      }
    })
    */

}