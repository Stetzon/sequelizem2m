module.exports = function(sequelize, DataTypes) {
  const Pet = sequelize.define("pet", {
    name: {
      type: DataTypes.STRING
    }
  });

  Pet.associate = function(models) {
    Pet.belongsToMany(models.user, { through: 'user_pet' });
  }

  return Pet;
};
  