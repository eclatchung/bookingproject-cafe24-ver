'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('store', {
      store_name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      store_id: {
        type: DataTypes.STRING(25),
        allowNull: false,
        primaryKey: true
      },
      store_psw: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      sort: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      addr1: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      addr2: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: '0'
      },
      res_num: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: '0'
      },
      res_status:{
        type:DataTypes.INT,
        allowNull : false,
        defaultValue :'0'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('store');
  }
};
