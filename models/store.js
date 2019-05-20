/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var store = sequelize.define('store', {
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
    res_time : {
      type : DataTypes.STRING,
      allowNull : false
    },
    res_num: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: '0'
    },
    res_status:{
      type:DataTypes.INTEGER,
      allowNull : false,
      defaultValue :'0'
    }
  }, {
    tableName: 'store'
  });

  store.associate = function(models){
    store.hasMany(models.menu);
  };

  store.associate = function(models){
    store.hasMany(models.book);
  };

  return store;
};
