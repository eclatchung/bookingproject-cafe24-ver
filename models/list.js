/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes){
    var list = sequelize.define('list',{
        menu : {
            type : DataTypes.STRING(50),
            allowNull : false
        },
        price : {
            type : DataTypes.INTEGER,
            allowNull :false
        },
        time : {
            type : DataTypes.INTEGER,
            allowNull : false
        },tableNum : {
            type: DataTypes.INTEGER,
            defaultValue : '0'
        }, store_id: {
            type: DataTypes.STRING(25),
            allowNull: false
          }

    },{
        tableName : 'list'
    });
    list.associate = function(models){
        list.belongsTo(models.member,{
            foreignKey : "mem_id"
        })
        list.belongsTo(models.book,{
            foreignKey : "book_id"
        })
    };
    return list;
}