import { GET_PUBLISHERS, DELETE_PUBLISHERS, ADD_PUBLISHERS} from '../actions/types'

    const initialState= {
        publishers:[]

    }

    export default function(state= initialState, action){
        switch(action.type){
            case GET_PUBLISHERS:
                return {
                    ...state,
                    publishers: action.payload
                }
            case DELETE_PUBLISHERS:
                return {
                    ...state,
                    publishers: state.publishers.filter((publisher) => publisher.id !== action.payload),
                };  
            
            case ADD_PUBLISHERS:
                return {
                    ...state,
                    publishers: [...state.publishers, action.payload]
                };                 

            default:
                return state            
            }
}