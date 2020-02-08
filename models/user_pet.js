module.exports = function(sequelize, DataTypes) {
  const UserPet = sequelize.define("user_pet", {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
      }
    },
    pet_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'pets',
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'roles',
      }
    },
    
  });

  return UserPet;
};
  