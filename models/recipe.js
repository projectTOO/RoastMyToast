module.exports = function (sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    }
  });

  Recipe.associate = function (models) {
    // We're saying that a Recipe should belong to an User
    // A Recipe can't be created without an User due to the foreign key constraint
    Recipe.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Recipe;
};