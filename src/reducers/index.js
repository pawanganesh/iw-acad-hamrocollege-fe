import { combineReducers } from "redux";
import noticeReducer from "./notices";
import authReducer from "./auth";

const allReducers = combineReducers({
  notices: noticeReducer,
  auth: authReducer,
});

export default allReducers;
