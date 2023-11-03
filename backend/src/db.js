const {Sequelize, DataTypes} = require("sequelize");
const studentModel = require('./models/Student');
const teacherModel = require('./models/Teachers');
const dataBase = new Sequelize(
    `postgres://postgres:acuario30012001@localhost:5432/gestionacademica`,
    {logging:false}
);

studentModel(dataBase)
teacherModel(dataBase)

module.exports = {dataBase, ...dataBase.models};