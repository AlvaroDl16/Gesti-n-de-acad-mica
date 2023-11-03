const {Router} = require("express");
const {createTeacher} = require("../controllers/teacherControler");
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

module.exports = teacherRouter;