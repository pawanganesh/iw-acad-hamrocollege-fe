import { GET_REQUESTS, DELETE_REQUESTS, ADD_REQUESTS, EDIT_REQUESTS, GET_REQUEST} from '../actions/types'

    const initialState= {
        requests:[]

    }

    export default function(state= initialState, action){
        switch(action.type){
            case GET_REQUESTS:
                return {
                    ...state,
                    requests: action.payload
                }
            case GET_REQUEST:
                return {
                    ...state,
                    requests: action.payload
                }
            case DELETE_REQUESTS:
                return {
                    ...state,
                    requests: state.requests.filter((request) => request.id !== action.payload),
                };  
            
            case ADD_REQUESTS:
                return {
                    ...state,
                    requests: [...state.requests, action.payload]
                }; 
                
            case EDIT_REQUESTS:
                return {
                    ...state,
                    [action.payload.id]: action.payload
                }; 

            default:
                return state            
            }
}