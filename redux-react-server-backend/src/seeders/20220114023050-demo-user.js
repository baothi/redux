'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('User',
      [
        {
          email: 'John Doe',
          password: '123',
          username: 'fake11',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'John Doe2',
          password: '123',
          username: 'fake12',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'John Doe3',
          password: '123',
          username: 'fake13',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
