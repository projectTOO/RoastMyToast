module.exports = function (sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  Comment.associate = function (models) {
    // We're saying that a Post should belong to a Recipe
    // A Post can't be created without a Recipe due to the foreign key constraint
    Comment.belongsTo(models.Recipe, {
      foreignKey: {
        allowNull: false,
        recipe_id: "id",
      }
    });

    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        user_id: "id",

      }
    });
  };

  return Comment;
};