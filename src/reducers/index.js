import { combineReducers } from "redux";
import authors from './authors' 
import publishers from './publishers'
import books from './books' 
import requests from './requests' 
import issues from './issues' 
import authReducer from "./auth";


export default combineReducers({
    authors,
    publishers,
    books,
    requests,
    issues,
    auth: authReducer,
    // subjects  

});