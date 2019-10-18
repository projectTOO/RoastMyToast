module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    }
  });

  Post.associate = function (models) {
    // We're saying that a Post should belong to a Recipe
    // A Post can't be created without a Recipe due to the foreign key constraint
    Post.belongsTo(models.Recipe, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};