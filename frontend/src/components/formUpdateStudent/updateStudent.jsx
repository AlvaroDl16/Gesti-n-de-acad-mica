import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent, getStudentById } from "../../redux/actions/actions";
import Navbar from "../navbar/navbar";
import { useParams, useNavigate } from "react-router-dom";


const UpdateStudent = ()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const edit = useSelector(state => state.studentById);
    
    const [input, setInput] = useState({
        firtsName:"",
        lastName:"",
        gender:"",
        age:"",
        email:""
    })

    useEffect(() => {
        dispatch(getStudentById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (edit) {
            setInput({
                firtsName: edit.firtsName,
                lastName: edit.lastName,
                gender: edit.gender,
                age: edit.age,
                email: edit.email
            });
        }
    }, [edit]);


    const handleInputChange = (e)=>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateStudent(id, input));
        alert("Estudiante actualizado");
        navigate("/Home"); 
    }

    return (
            
        <div >
        <Navbar/>
        <div >
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
                <button type="submit">Actualizar estudiante</button>
            </fieldset>
        </form>
        </div>
        </div>
    );
}

export default UpdateStudent;


