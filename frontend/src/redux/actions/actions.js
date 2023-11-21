import { GET_USERS, GET_STUDENTS, POST_STUDENT,POST_TEACHER, GET_TEACHER, GET_STUDENT } from "../actions_tipes/actions_types";
import axios from "axios";

const url = 'http://localhost:3001/student';

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

export const postStudent = (payload)=>{
    return async function(dispatch){
        let response = await axios.post(url,payload);
        return(dispatch({type:POST_STUDENT, payload:response.data}))
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