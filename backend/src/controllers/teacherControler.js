const {Teacher} = require("../db");

const createTeacher = async(firtsName, lastName, age, gender, email) => {
    const newTeacher = await Teacher.create({firtsName, lastName, age, gender, email})
    return newTeacher;
}

const getTeachers = async() => {
    const Teachers = await Teacher.findAll();
    return Teachers;
}

module.exports = {
    createTeacher,
    getTeachers
}