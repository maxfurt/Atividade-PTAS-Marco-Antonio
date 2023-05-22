'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [


      { nome: 'Marco', sobrenome: 'Ruckl', idade: '16', altura:'4.80' },
      { nome: 'Felipi', sobrenome: 'Silva', idade: '17', altura:'1.71' },
      { nome: 'jorjão', sobrenome: 'jorjão', idade: '87', altura:'1.30' },
      { nome: 'lucas', sobrenome: 'Negri', idade: '32', altura:'1.84' },
      { nome: 'luiz', sobrenome: 'Picolo', idade: '31', altura:'3.20' },
      { nome: 'renato', sobrenome: 'rodas', idade: '17', altura:'1.80' },
      { nome: 'thomaz', sobrenome: 'Ruckl', idade: '23', altura:'1.85' },
      { nome: 'dante', sobrenome: 'dantas', idade: '17', altura:'1.69' }


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
