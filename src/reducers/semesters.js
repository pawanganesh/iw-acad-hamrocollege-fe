import { GET_SEMESTERS, DELETE_SEMESTERS, ADD_SEMESTERS} from '../actions/types'

    const initialState= {
        semesters:[]

    }

    export default function(state= initialState, action){
        switch(action.type){
            case GET_SEMESTERS:
                return {
                    ...state,
                    semesters: action.payload
                }
            case DELETE_SEMESTERS:
                return {
                    ...state,
                    semesters: state.semesters.filter((semester) => semester.id !== action.payload),
                };  
            
            case ADD_SEMESTERS:
                return {
                    ...state,
                    semesters: [...state.semesters, action.payload]
                };                 

            default:
                return state            
            }
}