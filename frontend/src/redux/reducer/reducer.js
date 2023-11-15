import { GET_STUDENTS, GET_TEACHER, GET_USERS, POST_STUDENT, POST_TEACHER } from "../actions_tipes/actions_types";

const initialState = {
    students: [],
    users: [],
    teachers: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return{
                ...state,
                users: action.payload
            }
        
        case GET_STUDENTS:
            return{
                ...state,
                students: action.payload
            }

        case POST_STUDENT:
            return{
                ...state,
            }
        case POST_TEACHER:
            return{
                ...state,
            }

        case GET_TEACHER:
            return{
                ...state,
                teachers: action.payload
        }
        
        default: 
            return state;
    }
}

export default reducer;