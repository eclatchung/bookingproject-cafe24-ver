'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('member', {
      name: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      mem_id: {
        type: DataTypes.STRING(30),
        allowNull: false,
        primaryKey: true
      },
      mem_psw: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      mem_phone: {
        type: DataTypes.STRING(30),
        allowNull: false
      }
    }
    );
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('member');
  }
};
