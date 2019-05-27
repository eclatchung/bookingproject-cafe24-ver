/* jshint indent: 2 */

module.exports = function(sequelize,DataTypes){
    var booktime = sequelize.define('booktime',{
        AM_00시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_00시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_01시00_분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_01시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_02시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_02시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_03시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_03시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_04시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_04시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_05시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_05시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_06시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_06시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_07시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_07시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_08시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_08시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_09시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_09시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_10시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_11시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        AM_11시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_12시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_12시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_01시00_분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_01시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_02시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_02시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_03시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_03시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_04시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_04시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_05시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_05시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_06시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_06시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_07시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_07시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_08시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_08시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_09시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_09시30분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_10시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_11시00분 : {
            type: DataTypes.BOOLEAN,
            defaultValue: '0'
        },
        PM_11시30분 : {
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