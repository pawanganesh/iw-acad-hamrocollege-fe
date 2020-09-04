import { GET_CLASSROOMS, DELETE_CLASSROOMS, ADD_CLASSROOM_SUCCESS, GET_CLASSMEMBERS } from "../actions/types"

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

        case ADD_CLASSROOM_SUCCESS:{
            return {
                ...state,
                classrooms:[...state.classrooms, action.payload],
            }
        }

        case GET_CLASSMEMBERS:{
            return {
                ...state,
                classrooms: action.payload,
            }
        }

        default:
            return state;
    }

};

export default classroomReducer;

