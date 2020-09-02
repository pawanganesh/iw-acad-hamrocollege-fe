import { GET_FACULTY } from "../actions/types"

const initialState={
    faculty:[],
    
};

const facultyReducer = (state= initialState, action) => {
    // console.log("Action is:", action)
    // console.log("State is ",state);

    switch (action.type) {
        case GET_FACULTY: {
            return{
                ...state,
                faculty: action.payload,
            };
        }
        
        default:
            return state;
    }

};

export default facultyReducer;

