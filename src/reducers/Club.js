import { GET_CLUBS, DELETE_CLUBS } from "../actions/types"

const initialState={
    clubs:[],
};

const clubReducer = (state= initialState, action) => {
    console.log("Action is:", action)
    console.log("State is ",state);

    switch (action.type) {
        case GET_CLUBS: {
            return{
                ...state,
                clubs: action.payload,
            };
        }

        case DELETE_CLUBS: {
            return {
                ...state,
                clubs: state.classrooms.filter((club) => club.id !== action.payload),
            };
        }

        default:
            return state;
    }

};

export default clubReducer;

