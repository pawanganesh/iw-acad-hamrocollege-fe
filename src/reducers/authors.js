import { GET_AUTHORS, ADD_AUTHORS, DELETE_AUTHORS} from '../actions/types'

    const initialState= {
        authors:[]

    }

    export default function(state= initialState, action){
        switch(action.type){
            case GET_AUTHORS:
                return {
                    ...state,
                    authors: action.payload
                }
            case DELETE_AUTHORS:
                return {
                    ...state,
                    authors: state.authors.filter((author) => author.id !== action.payload),
                };  
            
            case ADD_AUTHORS:
                return {
                    ...state,
                    authors: [...state.authors, action.payload]
                };                 

            default:
                return state            
            }
}