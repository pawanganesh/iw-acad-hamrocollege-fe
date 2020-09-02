import { combineReducers } from "redux";
import authors from './authors' 
import publishers from './publishers'
import books from './books' 
import requests from './requests' 
import issues from './issues' 


export default combineReducers({
    authors,
    publishers,
    books,
    requests,
    issues
    // subjects  

});