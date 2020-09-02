import axios from 'axios'

import { GET_AUTHORS, DELETE_AUTHORS, ADD_AUTHORS } from './types'

export const getAuthors = () => dispatch => {    
    axios
        .get("http://127.0.0.1:8000/api/library/author/")
        .then((res) => {
            dispatch({
                type: GET_AUTHORS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
export const deleteAuthors = (id) => (dispatch) => {
    axios
      .delete(`http://127.0.0.1:8000/api/library/author/${id}/`)
      .then((res) => {
        dispatch({
          type: DELETE_AUTHORS,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };

export const addAuthors = (author) => dispatch => {    
    axios
        .post("http://127.0.0.1:8000/api/library/author/",author)
        .then((res) => {
            dispatch({
                type: ADD_AUTHORS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};