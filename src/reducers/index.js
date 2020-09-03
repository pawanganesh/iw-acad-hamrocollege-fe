import { combineReducers } from "redux";
import noticeReducer from "./notices";
import authReducer from "./auth";
import errorsReducer from "./errors";
import messagesReducer from "./messages";
import categoryReducer from "./categories";
import userProfileReducer from "./userprofile";
import classroomReducer from "./classroom";

const allReducers = combineReducers({
  notices: noticeReducer,
  auth: authReducer,
  errors: errorsReducer,
  messages: messagesReducer,
  categories: categoryReducer,
  userprofile: userProfileReducer,
  classroomDiscussions: classroomReducer,
});

export default allReducers;
