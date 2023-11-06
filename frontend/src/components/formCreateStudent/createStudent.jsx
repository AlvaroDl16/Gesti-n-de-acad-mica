import React from "react";
import { useState } from "react";

const CreateStudent = ()=>{

    const [input, setInput] = useState({
        firstName:"",
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

    const handleSubmit = ()=>{
        alert("hola");
    }

    return (
        <div>
        <h1>Formulario de creacion del estudiante</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Datos del estudiante</legend>
                <input 
                type="text" 
                value={input.firstName}
                name="firstName"
                placeholder="Nombre del estudiante"
                onChange={handleInputChange} />
            </fieldset>
        </form>
        </div>
    );
}

export default CreateStudent;