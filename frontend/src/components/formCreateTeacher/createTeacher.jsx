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
        alert("estudiante creado");
    }

    return(
        <div>
            <h2>Formulario de craecion de profesores</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Datos del profesor</legend>
                    <input 
                    type="text" 
                    value={input.firtsName}
                    name="firtsName"
                    placeholder="Nombre del profe"
                    onChange={handleInputChange} />
                    <br/>
                    <input type="text"
                    value={input.lastName}
                    name="lastName"
                    placeholder="apellidos del profesor"
                    onChange={handleInputChange}
                    /><br/>
                    <input type="text"
                    value={input.age}
                    name="age"
                    placeholder="edad del profesor"
                    onChange={handleInputChange}
                    /><br/>
                    <input type="text"
                    value={input.gender}
                    name="gender"
                    placeholder="genero del profesor"
                    onChange={handleInputChange}
                    /><br/>
                    <input type="text"
                    value={input.email}
                    name="email"
                    placeholder="correo del profesor"
                    onChange={handleInputChange}
                    /><br/>
                    <button type="submit">Crear</button>
                </fieldset>
            </form>
        </div>
    )
}

export default CreateTeacher;