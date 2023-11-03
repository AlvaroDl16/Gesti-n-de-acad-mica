import { GET_STUDENTS,GET_USERS } from "../actions_tipes/actions_types";

const initialState = {
    students: [],
    users: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return{
                ...state,
                users: action.payload
            }
        break;
        case GET_STUDENTS:
            return{
                ...state,
                students: action.payload
            }
        break;
        default: 
            return state;
    }
}

export default reducer;