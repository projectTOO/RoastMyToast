module.exports = function(sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipe", {
      user_name: DataTypes.STRING,
      recipe_name: DataTypes.STRING,
      instructions: DataTypes.TEXT,
      category: DataTypes.STRING,
      // can we do multiple categories? or is this a whole new table?
      image: DataTypes.STRING,

    });
    return Recipe;

    
  };
  