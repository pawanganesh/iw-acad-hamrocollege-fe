import { combineReducers } from "redux";
import noticeReducer from "./notices";
import authReducer from "./auth";
import errorsReducer from "./errors";
import messagesReducer from "./messages";
import categoryReducer from "./categories";

const allReducers = combineReducers({
  notices: noticeReducer,
  auth: authReducer,
  errors: errorsReducer,
  messages: messagesReducer,
  categories: categoryReducer,
});

export default allReducers;
