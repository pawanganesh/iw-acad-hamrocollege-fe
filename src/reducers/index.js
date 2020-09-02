import { combineReducers } from "redux";
import classroomReducer from "./Classroom";
// import accountReducer from "./account";
import facultyReducer  from "./faculty";
import subjectReducer from './subject';
import sectionReducer from './section'
import clubReducer from "./Club";

const allReducers = combineReducers({
    classrooms: classroomReducer,
    // users:accountReducer,
    faculty: facultyReducer,
    section: sectionReducer,
    subject: subjectReducer,
    clubs: clubReducer
});

export default allReducers;

