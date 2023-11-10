import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postStudent } from "../../redux/actions/actions";

const CreateStudent = ()=>{

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        firtsName:"",
        lastName:"",
        gender:"",
        age:"",
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
        dispatch(postStudent(input));
        alert("estudiante creado");
    }

    return (
        <div>
        <h1>Formulario de creacion del estudiante</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Datos del estudiante</legend>
                <input 
                type="text" 
                value={input.firtsName}
                name="firtsName"
                placeholder="Nombre del estudiante"
                onChange={handleInputChange} />
                <br/>
                <input 
                type="text" 
                value={input.lastName}
                name="lastName"
                placeholder="Apellido del estudiante"
                onChange={handleInputChange} />
                <br/>
                <input 
                type="text" 
                value={input.gender}
                name="gender"
                placeholder="genero del estudiante"
                onChange={handleInputChange} />
                <br/>
                <input 
                type="text" 
                value={input.age}
                name="age"
                placeholder="edad del estudiante"
                onChange={handleInputChange} />
                <br/>
                <input 
                type="text" 
                value={input.email}
                name="email"
                placeholder="email del estudiante"
                onChange={handleInputChange} />
                <br/>
                <button type="submit">Crear estudiante</button>
            </fieldset>
        </form>
        </div>
    );
}

export default CreateStudent;