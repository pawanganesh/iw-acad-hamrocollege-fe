import axios from 'axios'

import { GET_PUBLISHERS, DELETE_PUBLISHERS, ADD_PUBLISHERS } from './types'

export const getPublishers = () => dispatch => {    
    axios
        .get("http://127.0.0.1:8000/api/publisher/")
        .then((res) => {
            dispatch({
                type: GET_PUBLISHERS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
export const deletePublishers = (id) => (dispatch) => {
    axios
      .delete(`http://127.0.0.1:8000/api/publisher/${id}/`)
      .then((res) => {
        dispatch({
          type: DELETE_PUBLISHERS,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };

export const addPublishers = (publisher) => dispatch => {    
    axios
        .post("http://127.0.0.1:8000/api/publisher/",publisher)
        .then((res) => {
            dispatch({
                type: ADD_PUBLISHERS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};