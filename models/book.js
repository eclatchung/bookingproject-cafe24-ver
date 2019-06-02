/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes){
    var book = sequelize.define('book',{
        book_id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        tableNum : {
            type: DataTypes.INTEGER,
            defaultValue : '0'
        }
    },{
        tableName : 'book'
    });
    book.associate = function(models){
        book.belongsTo(models.store,{
            foreignKey : "store_id"
        })
        book.hasOne(models.booktime);
        book.hasMany(models.list);
    };

    return book;
}