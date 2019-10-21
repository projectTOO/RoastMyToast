module.exports = function (sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Comment.associate = function (models) {
    // We're saying that a Comment should belong to a Recipe
    // A Comment can't be created without a Recipe due to the foreign key constraint
    Comment.belongsTo(models.Recipe, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Comment.associate = function (models) {
    // We're saying that a Comment should belong to an User
    // A Comment can't be created without an User due to the foreign key constraint
    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Comment;
};