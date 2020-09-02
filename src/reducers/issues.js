import { GET_ISSUES, DELETE_ISSUES, ADD_ISSUES} from '../actions/types'

    const initialState= {
        issues:[]

    }

    export default function(state= initialState, action){
        switch(action.type){
            case GET_ISSUES:
                return {
                    ...state,
                    issues: action.payload
                }
            case DELETE_ISSUES:
                return {
                    ...state,
                    issues: state.issues.filter((issue) => issue.id !== action.payload),
                };  
            
            case ADD_ISSUES:
                return {
                    ...state,
                    issues: [...state.issues, action.payload]
                };                 

            default:
                return state            
            }
}