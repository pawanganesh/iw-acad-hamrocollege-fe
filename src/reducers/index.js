import { combineReducers } from "redux";
import noticeReducer from "./notices";

const allReducers = combineReducers({
  notices: noticeReducer,
});

export default allReducers;
