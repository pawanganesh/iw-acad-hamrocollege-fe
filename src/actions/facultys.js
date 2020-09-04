import axios from 'axios'

import { GET_FACULTYS, DELETE_FACULTYS, ADD_FACULTYS } from './types'

export const getFacultys = () => dispatch => {    
    axios
        .get("http://127.0.0.1:8000/api/faculty/")
        .then((res) => {
            dispatch({
                type: GET_FACULTYS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
export const deleteFacultys = (id) => (dispatch) => {
    axios
      .delete(`http://127.0.0.1:8000/api/faculty/${id}/`)
      .then((res) => {
        dispatch({
          type: DELETE_FACULTYS,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };

export const addFacultys = (faculty) => dispatch => {    
    axios
        .post("http://127.0.0.1:8000/api/faculty/",faculty)
        .then((res) => {
            dispatch({
                type: ADD_FACULTYS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};