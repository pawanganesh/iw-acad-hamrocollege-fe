import axios from 'axios'
import { tokenConfig } from "../actions/auth";
import { GET_BOOKS, DELETE_BOOKS, ADD_BOOKS } from './types'

export const getBooks = () => (dispatch, getState) => {    
    axios
        .get("http://127.0.0.1:8000/api/book/",tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_BOOKS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
export const deleteBooks = (id) => (dispatch, getState) => {
    axios
      .delete(`http://127.0.0.1:8000/api/book/${id}/`, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: DELETE_BOOKS,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };

export const addBooks = (books) => (dispatch, getState) => {    
    axios
        .post("http://127.0.0.1:8000/api/book/",books, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: ADD_BOOKS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};