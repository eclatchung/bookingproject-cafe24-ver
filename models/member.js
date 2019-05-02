/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const member = sequelize.define('Member', {
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
  }, {
    tableName: 'member'
  });
  return member;
};
