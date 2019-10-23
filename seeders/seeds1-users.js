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
    return queryInterface.bulkInsert('users', [
      {
        name: "Jim",
        email: "jj@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Robert",
        email: "bob@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Laura",
        email: "lir@xfinity.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "John",
        email: "jack@outlook.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mary",
        email: "mary@icloud.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Charles",
        email: "chuck@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};
