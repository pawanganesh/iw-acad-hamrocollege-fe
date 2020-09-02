import { GET_BOOKS, ADD_BOOKS, DELETE_BOOKS} from '../actions/types'

    const initialState= {
       books:[]

    }

    export default function(state= initialState, action){
        switch(action.type){
            case GET_BOOKS:
                return {
                    ...state,
                    books: action.payload
                }
            case DELETE_BOOKS:
                return {
                    ...state,
                    books: state.books.filter((book) => book.id !== action.payload),
                };  
            
            case ADD_BOOKS:
                return {
                    ...state,
                    books: [...state.books, action.payload]
                };                 

            default:
                return state            
            }
}