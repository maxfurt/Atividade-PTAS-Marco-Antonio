'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [

      { nome: 'Marco'},
      { nome: 'Picolo' },
      { nome: 'Jales' },
      { nome: 'Afranio' },
      { nome: 'Jorjão' }

  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
