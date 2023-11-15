import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTeacher } from "../../redux/actions/actions";

const CreateTeacher = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        firtsName:"",
        lastName:"",
        age:"",
        gender:"",
        email:""
    })

    const handleInputChange = (e)=>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(postTeacher(input));
        alert("DATOS DEL DOCENTE INTRODUCIDOS CORRECTAMENTE");
    }

    return(
        
        <div>
            <h2>FORMULARIO DE CREACION DE PROFESORES</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>introduzca sus datos</legend>
                    <table height={400} border="1" align="center" bgcolor="aquamarine" width={600}>
                        <thead>
                    <tr>
                    <td>Nombre:</td>
                    <td><input 
                    type="text" 
                    value={input.firtsName}
                    name="firtsName"
                    onChange={handleInputChange} size={50}/>
                    </td>
                    </tr>
                    <tr>
                    <td>Apellido:</td><td><input type="text"
                    value={input.lastName}
                    name="lastName"
                    onChange={handleInputChange} size={50}
                    /></td></tr>
                    <tr>
                    <td>Edad:</td><td><input type="text"
                    value={input.age}
                    name="age"
                    onChange={handleInputChange} size={50}
                    /></td></tr>
                    <tr>
                    <td>Genero:</td><td><input type="text"
                    value={input.gender}
                    name="gender"
                    onChange={handleInputChange} size={50}
                    /></td></tr>
                    <tr>
                    <td>E-mail:</td><td><input type="text"
                    value={input.email}
                    name="email"
                    onChange={handleInputChange} size={50}
                    /></td></tr>
                    <tr>
                    <td></td>
                    <td><button type="submit">Crear</button></td></tr>
                    </thead>
                    </table>
                </fieldset>
            </form>
        </div>
    )
}

export default CreateTeacher;