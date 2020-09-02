import axios from 'axios'

import { GET_ISSUES, DELETE_ISSUES, ADD_ISSUES } from './types'

export const getIssues = () => dispatch => {    
    axios
        .get("http://127.0.0.1:8000/api/library/bookissue/")
        .then((res) => {
            dispatch({
                type: GET_ISSUES,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
export const deleteIssues = (id) => (dispatch) => {
    axios
      .delete(`http://127.0.0.1:8000/api/library/bookissue/${id}/`)
      .then((res) => {
        dispatch({
          type: DELETE_ISSUES,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };

export const addIssues = (issue) => dispatch => {    
    axios
        .post("http://127.0.0.1:8000/api/library/bookissue/",issue)
        .then((res) => {
            dispatch({
                type: ADD_ISSUES,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};