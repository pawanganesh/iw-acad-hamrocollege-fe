import { combineReducers } from "redux";
import noticeReducer from "./notices";
import authReducer from "./auth";
import errorsReducer from "./errors";
import messagesReducer from "./messages";
import categoryReducer from "./categories";
import userProfileReducer from "./userprofile";

const allReducers = combineReducers({
  notices: noticeReducer,
  auth: authReducer,
  errors: errorsReducer,
  messages: messagesReducer,
  categories: categoryReducer,
  userprofile: userProfileReducer,
});

export default allReducers;
