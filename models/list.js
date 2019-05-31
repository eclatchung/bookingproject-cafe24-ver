/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes){
    var list = sequelize.define('list',{
        orderId : {
            type: DataTypes.INTEGER,
            allowNull : true
        },
        menuName : {
            type : DataTypes.STRING(50),
            allowNull : false
        },
        menuPrice : {
            type : DataTypes.INTEGER,
            allowNull :false
        }
    },{
        tableName : 'list'
    });
    list.associate = function(models){
        list.belongsTo(models.member,{
            foreignKey : "mem_id"
        })
    };
    return list;
}