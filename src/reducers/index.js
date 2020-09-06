import { combineReducers } from "redux";
import assigns from "./assigns";
import submissions from "./submissions";
import facultys from "./facultys";
import semesters from "./semesters";
import subjects from "./subjects";
import noticeReducer from "./notices";
import authReducer from "./auth";
import errorsReducer from "./errors";
import messagesReducer from "./messages";
import categoryReducer from "./categories";
import userProfileReducer from "./userprofile";
import classroomReducer from "./classroom";
import collegeReducer from "./college";
import books from "./books";
import authors from "./authors";
import issues from "./issues";
import publishers from "./publishers";
import requests from "./requests";

const allReducers = combineReducers({
  requests,
  publishers,
  issues,
  authors,
  books,
  assigns,
  submissions,
  facultys,
  semesters,
  subjects,
  notices: noticeReducer,
  auth: authReducer,
  errors: errorsReducer,
  messages: messagesReducer,
  categories: categoryReducer,
  userprofile: userProfileReducer,
  classrooms: classroomReducer,
  college: collegeReducer,
});

export default allReducers;
