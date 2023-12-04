import { GET_USERS, 
    GET_STUDENTS, 
    POST_STUDENT,
    POST_TEACHER, 
    GET_TEACHER, 
    GET_STUDENT, 
    GET_STUDENTBYID,
    UPDATE_STUDENT,
    DELETE_STUDENTBYID } from "../actions_tipes/actions_types";
import axios from "axios";

const url = 'http://localhost:3001/student/';

export const getUsers = ()=>{
    return async function (dispatch) {
        let response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        return (dispatch({
            type:GET_USERS,
            payload:response.data
        }))
    }
}

export const getStudents = ()=>{
    return async function(dispatch){
        let response = await axios.get(url);
        return(dispatch({
            type:GET_STUDENTS,
            payload:response.data
        }))
    }
}

export const getStudentById = (id)=>{
    return async function(dispatch){
        let response = await axios.get(`${url}${id}`)
        return(dispatch({
            type: GET_STUDENTBYID,
            payload: response.data
        }))
    }
}

export const updateStudent = (id, data) => {
    return async function (dispatch) {
        try {
            const response = await axios.put(`${url}${id}`, data);
            if (response.status === 200) {
               dispatch(getStudentById(id));
            } else {
                console.error("Error al actualizar estudiante:", response.status);
            }
        } catch (error) {
            console.error("Error en la solicitud de actualización:", error.message);
        }
    };
};

export const postStudent = (payload)=>{
    return async function(dispatch){
        let response = await axios.post(url,payload);
        return(dispatch({type:POST_STUDENT, payload:response.data}))
    }
}

export const deleteStudent = (id) => {
    return async function(dispatch) {
        try {
            await axios.delete(`${url}${id}`);
            dispatch({
                type: DELETE_STUDENTBYID,
                payload: id
            });
            alert("Estudiante eliminado correctamente");
        } catch (error) {
            console.error("Error al eliminar estudiante:", error.message);
            alert("Error al eliminar estudiante");
        }
    }
}

export const postTeacher = (payload)=>{
    return async function(dispatch){
        let response = await axios.post('http://localhost:3001/teacher',payload);
        return(dispatch({type:POST_TEACHER, payload:response.data}))
    }
}

export const getTeachers = ()=>{
    return async function(dispatch){
        let response = await axios.get('http://localhost:3001/teacher');
        return(dispatch({
            type:GET_TEACHER,
            payload:response.data
        }))
    }
}






//se crea la accion del action types get student