import { ADD_ATTENDANCE_SUCCESS } from "../actions/types"

const initialState={
    attendance:[],
};

const attendanceReducer = (state= initialState, action) => {
    console.log("Action is:", action)
    console.log("State is ",state);

    switch (action.type) {
        case ADD_ATTENDANCE_SUCCESS: {
            return{
                ...state,
                attendance: action.payload
            };
        }

        default:
            return state;
    }

};

export default attendanceReducer;

