import axios from 'axios'

import { GET_SUBMISSIONS, DELETE_SUBMISSIONS, ADD_SUBMISSIONS } from './types'

export const getSubmissions = () => dispatch => {    
    axios
        .get("http://127.0.0.1:8000/api/assign/submission/")
        .then((res) => {
            dispatch({
                type: GET_SUBMISSIONS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
export const deleteSubmissions = (id) => (dispatch) => {
    axios
      .delete(`http://127.0.0.1:8000/api/assign/submission/${id}/`)
      .then((res) => {
        dispatch({
          type: DELETE_SUBMISSIONS,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };

export const addSubmissions = (submission) => dispatch => {    
    axios
        .post("http://127.0.0.1:8000/api/assign/submission/",submission)
        .then((res) => {
            dispatch({
                type: ADD_SUBMISSIONS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};