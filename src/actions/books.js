import axios from 'axios'

import { GET_BOOKS, DELETE_BOOKS, ADD_BOOKS } from './types'

export const getBooks = () => dispatch => {    
    axios
        .get("http://127.0.0.1:8000/api/library/book/")
        .then((res) => {
            dispatch({
                type: GET_BOOKS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
export const deleteBooks = (id) => (dispatch) => {
    axios
      .delete(`http://127.0.0.1:8000/api/library/book/${id}/`)
      .then((res) => {
        dispatch({
          type: DELETE_BOOKS,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };

export const addBooks = (book) => dispatch => {    
    axios
        .post("http://127.0.0.1:8000/api/library/book/",book)
        .then((res) => {
            dispatch({
                type: ADD_BOOKS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};