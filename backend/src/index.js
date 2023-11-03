const express = require("express");
const morgan = require("morgan");
const {dataBase} = require("./db");
const studentRouter = require("./routes/studentRouter");
const teacherRouter = require("./routes/teacherRouter");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(morgan("dev"));//muestra informacion de la peticion
server.use(express.json());//transforma los datos a objetosde js

server.use("/student", studentRouter);
server.use("/teacher", teacherRouter);

const PORT = 3001;

//fore:true elimina las tablas de la bd y las vuelve a crear
//alter:true actualiza las tablas de la base de datos
dataBase.sync({alter:true})
.then(() => {
    server.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`);
    })
}
).catch(err => console.log(err.message))