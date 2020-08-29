import { GET_ASSIGNS, DELETE_ASSIGNS, ADD_ASSIGNS } from '../actions/types'

    const initialState= {
        assigns:[]

    }

    export default function(state= initialState, action){
        switch(action.type){
            case GET_ASSIGNS:
                return {
                    ...state,
                    assigns: action.payload
                }
            case DELETE_ASSIGNS:
                return {
                    ...state,
                    assigns: state.assigns.filter((assign) => assign.id !== action.payload),
                  };                          
            case ADD_ASSIGNS:
                return {
                    ...state,
                    assigns: [...state.assigns, action.payload]
                }; 
            default:
                return state            
        }

    }