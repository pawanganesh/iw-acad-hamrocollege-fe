import { GET_USERS} from "../actions/types"

const initialState={
    users:[],
};

const accountReducer = (state= initialState, action) => {
    // console.log("Action is:", action)
    // console.log("State is ",state);

    switch (action.type) {
        case GET_USERS: {
            return{
                ...state,
                users: action.payload,
            };
        }

        
        default:
            return state;
    }

};

export default accountReducer;

