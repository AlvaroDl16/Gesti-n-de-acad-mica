import { GET_USERS, GET_STUDENTS } from "../actions_tipes/actions_types";
import axios from "axios";

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
        let response = await axios.get('http://localhost:3001/student');
        return(dispatch({
            type:GET_STUDENTS,
            payload:response.data
        }))
    }
}

//se crea la accion del action types get student