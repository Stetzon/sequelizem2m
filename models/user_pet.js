module.exports = function(sequelize, DataTypes) {
  const UserPet = sequelize.define("user_pet", {
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'roles',
      }
    },
  });

  return UserPet;
};
  