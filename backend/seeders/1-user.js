'use strict';

const md5 = require('md5');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('user', [{
      nama_user: 'admin_nopal',
      foto: null,
      email: 'admin_nopal@wikusamahotel.com',
      password: md5('admin'),
      role: 'admin',
    }], {});
    
    await queryInterface.bulkInsert('user', [{
      nama_user: 'resepsionis_hadi',
      foto: null,
      email: 'resepsionis_hadi@wikusamahotel.com',
      password: md5('resepsionis'),
      role: 'resepsionis',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('user', null, {});
  }
};
