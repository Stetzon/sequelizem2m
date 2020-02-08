module.exports = function(app, db) {

    app.get('/', function(req, res) {
      res.render('index')
    })

    app.get('/pets', function(req, res) {
      db.pet.findAll({
        raw: true // return plain json instead of sequelize objects
      }).then(function(pets) {
        res.render('pets', {pets: pets})
      })
    })

    app.get('/users', function(req, res) {
      db.user.findAll({
        raw: true // return plain json instead of sequelize objects
      }).then(function(users) {
        res.render('users', {users: users})
      })
    })
}