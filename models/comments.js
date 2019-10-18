module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      recipe_id: DataTypes.INTEGER,
      user_name: DataTypes.STRING,
      comnment: DataTypes.TEXT,
      image: DataTypes.STRING,
      rating: DataTypes.INTEGER,

    });

    Comments.associate = function(models) {
      Comments.belongsTo(models.recipes, {
        foreignKey: {
          name: "id",

        }
      })
    }
    return Comment;
  };
  