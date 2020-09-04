import { combineReducers } from "redux";
import assigns from './assigns' 
import submissions from './submissions' 
import facultys from './facultys' 
import semesters from './semesters'
import subjects from './subjects' 

export default combineReducers({
  assigns,
  submissions,
  facultys,
  semesters,
  subjects

});