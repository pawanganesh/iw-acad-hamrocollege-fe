import axios from 'axios'
import { tokenConfig } from "../actions/auth";
import { GET_AUTHORS, DELETE_AUTHORS, ADD_AUTHORS } from './types'

export const getAuthors = () => (dispatch, getState) => {    
    axios
        .get("http://127.0.0.1:8000/api/author/", tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_AUTHORS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
export const deleteAuthors = (id) => (dispatch, getState) => {
    axios
      .delete(`http://127.0.0.1:8000/api/author/${id}/`, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: DELETE_AUTHORS,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };

export const addAuthors = (author) => (dispatch, getState) => {    
    axios
        .post("http://127.0.0.1:8000/api/author/",author, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: ADD_AUTHORS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};