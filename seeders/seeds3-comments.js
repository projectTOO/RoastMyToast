'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('comments', [
      {
        comment: "Delicious",
        rating: 4,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 1,
        UserId: 4
      },
      {
        comment: "Tasty",
        rating: 3,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 1,
        UserId: 5
      },
      {
        comment: "Very good",
        rating: 3,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 1,
        UserId: 2
      },
      {
        comment: "Easy to make",
        rating: 4,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 2,
        UserId: 4
      },
      {
        comment: "Fresh",
        rating: 3,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 2,
        UserId: 1
      },
      {
        comment: "Great flavor",
        rating: 3,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 3,
        UserId: 2
      },
      {
        comment: "Great flavor",
        rating: 3,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 4,
        UserId: 1
      },
      {
        comment: "Plain",
        rating: 1,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 4,
        UserId: 6
      },
      {
        comment: "Tasty",
        rating: 3,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 5,
        UserId: 3
      },
      {
        comment: "Too dry",
        rating: 1,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 6,
        UserId: 6
      },
      {
        comment: "Overcooked",
        rating: 1,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 6,
        UserId: 4
      },
      {
        comment: "Hard to chew",
        rating: 1,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 6,
        UserId: 2
      },
      {
        comment: "Salty",
        rating: 1,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 6,
        UserId: 5
      },
      {
        comment: "Too spicy",
        rating: 2,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 5,
        UserId: 3
      },
      {
        comment: "Delicious",
        rating: 4,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 7,
        UserId: 4
      },
      {
        comment: "Amazing",
        rating: 4,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 7,
        UserId: 6
      },
      {
        comment: "Juicy and tender",
        rating: 4,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 5,
        UserId: 6
      },
      {
        comment: "Traditional taste",
        rating: 4,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 3,
        UserId: 5
      },
      {
        comment: "Incredible",
        rating: 4,
        image_url: "https://",
        createdAt: new Date(),
        updatedAt: new Date(),
        RecipeId: 1,
        UserId: 6
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('comments', null, {});
  }
};
