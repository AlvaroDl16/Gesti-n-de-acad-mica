const {DataTypes} = require("sequelize");
// const { dataBase } = require("../db");

const teacherModel = (dataBase) => {
    dataBase.define("Teacher", {
        id:{
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firtsName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull: null
        },
        gender:{
            type: DataTypes.ENUM('male','female'),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{timestamps:false});
}

module.exports = teacherModel;