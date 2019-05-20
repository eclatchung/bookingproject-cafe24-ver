/* jshint indent: 2 */

module.exports = function(sequelize,DataTypes){
    var booktime = sequelize.define('booktime',{
        AM0000 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0030 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0100 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0130 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0200 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0230 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0300 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0330 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0400 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0430 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0500 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0530 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0600 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0630 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0700 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0730 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0800 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0830 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0900 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM0930 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM1000 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM1100 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM1130 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1200 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1230 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1300 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1330 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1400 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1430 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1500 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1530 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1600 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1630 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1700 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1730 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1800 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1830 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1900 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM1930 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM2000 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM2030 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM2100 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM2130 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM2200 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM2230 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM2300 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM2330 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        }
    },{
        tableName : 'booktime'
    });

    booktime.associate = function(models){
        booktime.belongsTo(models.book,{
            foreignKey : "book_id"
        })
    };
    return booktime;
}