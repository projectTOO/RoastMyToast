module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    name: DataTypes.STRING,
    // The email cannot be null, and must be a proper email before creation
    // email: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   unique: true,
    //   validate: {
    //     isEmail: true
    //   }
    // }
  });

  User.associate = function (models) {
    // Associating User with Recipes
    // When an User is deleted, also delete any associated Recipes
    User.hasMany(models.Recipe, {
      onDelete: "cascade"
    });
    // Associating User with Comments
    // When an User is deleted, also delete any associated Comments
    User.hasMany(models.Comment, {
      onDelete: "cascade"
    });
  };

  return User;
};