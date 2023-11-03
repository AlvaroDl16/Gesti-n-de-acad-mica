const {Router} = require("express");
const {createStudent, getStudents, findStudent, updateStudent, deleteStudent} = require("../controllers/studentControllers");
const studentRouter = Router();

studentRouter.post("/", async(req, res) => {
    const {firtsName, lastName, age, gender, email} = req.body;
    try {
        const newStudent = await createStudent(firtsName, lastName, age, gender, email);
        res.status(200).json(newStudent);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

studentRouter.get("/", async(req, res) => {
    const {lastName} = req.query;
    let student;
    try{
        if(lastName){
            student = await findStudent(lastName);
        } else{
            student = await getStudents();
        }
        res.status(200).json(student);
    } catch(error){
        res.status(400).json({error: error.message});
    }
})

studentRouter.put("/:id", async(req, res)=>{
    const {id} = req.params;
    const {firtsName, lastName, age, gender, email} = req.body;
    try {
        const actualizarStudent = await updateStudent(id,firtsName, lastName, age, gender, email)
        res.status(200).json(actualizarStudent);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

studentRouter.delete("/:id", async (req, res)=>{
    const{ id }  = req.params ;
    try {
        const studentDeleted = await deleteStudent(id);
        res.status(200).json(studentDeleted)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = studentRouter;