import axios from 'axios'

import { GET_REQUESTS, DELETE_REQUESTS, ADD_REQUESTS } from './types'

export const getRequests = () => dispatch => {    
    axios
        .get("http://127.0.0.1:8000/api/library/bookrequest/")
        .then((res) => {
            dispatch({
                type: GET_REQUESTS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
export const deleteRequests = (id) => (dispatch) => {
    axios
      .delete(`http://127.0.0.1:8000/api/library/bookrequest/${id}/`)
      .then((res) => {
        dispatch({
          type: DELETE_REQUESTS,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };

export const addRequests = (request) => dispatch => {    
    axios
        .post("http://127.0.0.1:8000/api/library/bookrequest/",request)
        .then((res) => {
            dispatch({
                type: ADD_REQUESTS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};