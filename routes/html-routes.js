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
}