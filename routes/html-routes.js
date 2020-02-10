module.exports = function(app, db) {

    function formatSequelizeArray(seqArr) {
      return seqArr.map(function(seqObj) {
        return seqObj.toJSON();
      })
    }

    app.get('/', function(req, res) {
      const usersPromise = db.user.findAll({include: db.pet})
      const petsPromise = db.pet.findAll({include: db.user})

      Promise.all([usersPromise, petsPromise])
        .then(function([users, pets]) {
          res.render('index', {
            users: formatSequelizeArray(users),
            pets: formatSequelizeArray(pets),
          })
        })
    })

    // async version:
    /*
    app.get('/', function(req, res) {
      try {
        const users = await db.user.findAll({include: db.pet})
        const pets = await db.pet.findAll({include: db.user})

        res.render('index', {
          users: formatSequelizeArray(users),
          pets: formatSequelizeArray(pets),
        })

      } catch (error) {
        throw error;
      }
    })
    */

}