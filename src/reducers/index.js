import { combineReducers } from "redux";
import classroomReducer from "./Classroom";

const allReducers = combineReducers({
    classrooms: classroomReducer
});

export default allReducers;

