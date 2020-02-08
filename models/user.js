module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("user", {
    name: {
      type: DataTypes.STRING
    }
  });

  User.associate = function(models) {
    User.belongsToMany(models.pet, { through: 'user_pet' });
  }

  return User;
};
