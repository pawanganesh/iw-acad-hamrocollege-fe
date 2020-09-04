import { GET_CLUBS, DELETE_CLUB, ADD_CLUB_SUCCESS } from "../actions/types"

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

        case ADD_CLUB_SUCCESS:{
            return {
                ...state,
                clubs:[...state.clubs, action.payload],
            }
        }


        case DELETE_CLUB: {
            return {
                ...state,
                clubs: state.clubs.filter((club) => club.id !== action.payload),
            };
        }

        default:
            return state;
    }

};

export default clubReducer;

