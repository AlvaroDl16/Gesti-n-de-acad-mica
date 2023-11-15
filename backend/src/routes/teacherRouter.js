const {Router} = require("express");
const {createTeacher, getTeachers} = require("../controllers/teacherControler");
const teacherRouter = Router();

teacherRouter.post("/", async(req, res) => {
    const {firtsName, lastName, age, gender, email} = req.body;
    try {
        const newTeacher = await createTeacher(firtsName, lastName, age, gender, email);
        res.status(200).json(newTeacher);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

teacherRouter.get("/", async(req, res) => {
    const {lastName} = req.query;
    let teacher;
    try{
        if(lastName){
            teacher = await findTeacher(lastName);
        } else{
            teacher = await getTeachers();
        }
        res.status(200).json(teacher);
    } catch(error){
        res.status(400).json({error: error.message});
    }
})

module.exports = teacherRouter;