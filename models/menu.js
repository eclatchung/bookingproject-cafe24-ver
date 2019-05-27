/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var menu = sequelize.define('menu', {
      menu_name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      tableName: 'menu'
    });

    menu.associate = function(models){
        menu.belongsTo(models.store,{
            foreignKey : "store_id"
        })
    };

    return menu;
  };
  