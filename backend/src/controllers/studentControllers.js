const {Student} = require("../db");
const {Op} = require('sequelize');

const createStudent = async(firtsName, lastName, age, gender, email) => {
    const newStudent = await Student.create({firtsName, lastName, age, gender, email})
    return newStudent;
}

const getStudents = async() => {
    const Students = await Student.findAll();
    return Students;
}

const findStudent = async(lastName) => {
    const result = await Student.findAll(
        {
            where:{lastName:{[Op.iLike]: `%${lastName}%`}}
        }
    );
    return result;
}

const findStudentById = async(id)=>{
    const studentId = await Student.findByPk(id);
    return studentId;
}

const updateStudent = async(id, firtsName, lastName, age, gender, email)=>{
    const findStudent = await Student.findByPk(id);
    const studentUpdate = await findStudent.update({firtsName, lastName, age, gender, email})
    return studentUpdate;
}

const deleteStudent = async (id)=>{
    const student = await Student.findByPk(id);
    await student.destroy();
    return student;
}




module.exports = {
    createStudent,
    getStudents,
    findStudent,
    updateStudent,
    deleteStudent,
    findStudentById
}