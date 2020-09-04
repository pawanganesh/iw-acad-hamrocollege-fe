import { GET_FACULTYS, DELETE_FACULTYS, ADD_FACULTYS} from '../actions/types'

    const initialState= {
        facultys:[]

    }

    export default function(state= initialState, action){
        switch(action.type){
            case GET_FACULTYS:
                return {
                    ...state,
                    facultys: action.payload
                }
            case DELETE_FACULTYS:
                return {
                    ...state,
                    facultys: state.facultys.filter((faculty) => faculty.id !== action.payload),
                };  
            
            case ADD_FACULTYS:
                return {
                    ...state,
                    facultys: [...state.facultys, action.payload]
                };                 

            default:
                return state            
            }
}