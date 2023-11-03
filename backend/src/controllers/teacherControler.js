const {Teacher} = require("../db");

const createTeacher = async(firtsName, lastName, age, gender, email) => {
    const newTeacher = await Teacher.create({firtsName, lastName, age, gender, email})
    return newTeacher;
}
module.exports = {
    createTeacher
}