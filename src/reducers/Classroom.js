import { GET_CLASSROOMS, DELETE_CLASSROOMS } from "../actions/types"

const initialState={
    classrooms:[],
};

const classroomReducer = (state= initialState, action) => {
    console.log("Action is:", action)
    console.log("State is ",state);

    switch (action.type) {
        case GET_CLASSROOMS: {
            return{
                ...state,
                classrooms: action.payload,
            };
        }

        case DELETE_CLASSROOMS: {
            return {
                ...state,
                classrooms: state.classrooms.filter((classroom) => classroom.id !== action.payload),
            };
        }

        default:
            return state;
    }

};

export default classroomReducer;

