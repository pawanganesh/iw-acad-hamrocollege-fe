import { GET_SECTIONS } from "../actions/types"

const initialState={
    section:[],
    
};

const sectionReducer = (state= initialState, action) => {
    // console.log("Action is:", action)
    // console.log("State is ",state);

    switch (action.type) {
        case GET_SECTIONS: {
            return{
                ...state,
                section: action.payload,
            };
        }
        
        default:
            return state;
    }

};

export default sectionReducer;

