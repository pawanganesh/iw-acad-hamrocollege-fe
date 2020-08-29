import axios from 'axios'

import { GET_ASSIGNS, DELETE_ASSIGNS, ADD_ASSIGNS } from './types'

export const getAssigns = () => dispatch => {    
    axios
        .get("http://127.0.0.1:8000/api/assign/assignment/")
        .then((res) => {
            dispatch({
                type: GET_ASSIGNS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};

export const deleteAssigns = (id) => (dispatch) => {
    axios
      .delete(`http://127.0.0.1:8000/api/assign/assignment/${id}/`)
      .then((res) => {
        dispatch({
          type: DELETE_ASSIGNS,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };


  export const addAssigns = (assign) => dispatch => {    
    axios
        .post("http://127.0.0.1:8000/api/assign/assignment/",assign)
        .then((res) => {
            dispatch({
                type: ADD_ASSIGNS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
