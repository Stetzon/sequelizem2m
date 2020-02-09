module.exports = function(sequelize, DataTypes) {
  const UserPet = sequelize.define("user_pet", {
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [[
          'Owner', 'Vet', 'Sitter'
        ]]
      }
    },
  });

  return UserPet;
};
  