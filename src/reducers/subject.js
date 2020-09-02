import { GET_SUBJECTS } from "../actions/types"

const initialState={
    subject:[],
    
};

const subjectReducer = (state= initialState, action) => {
    // console.log("Action is:", action)
    // console.log("State is ",state);

    switch (action.type) {
        case GET_SUBJECTS: {
            return{
                ...state,
                subject: action.payload,
            };
        }
        
        default:
            return state;
    }

};

export default subjectReducer;

