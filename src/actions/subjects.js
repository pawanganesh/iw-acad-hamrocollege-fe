import axios from 'axios'

import { GET_SUBJECTS, DELETE_SUBJECTS, ADD_SUBJECTS } from './types'

export const getSubjects = () => dispatch => {    
    axios
        .get("http://127.0.0.1:8000/api/subjectlist/")
        .then((res) => {
            dispatch({
                type: GET_SUBJECTS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
export const deleteSubjects = (id) => (dispatch) => {
    axios
      .delete(`http://127.0.0.1:8000/api/subjectlist/${id}/`)
      .then((res) => {
        dispatch({
          type: DELETE_SUBJECTS,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };

export const addSubjects = (subject) => dispatch => {    
    axios
        .post("http://127.0.0.1:8000/api/subjectlist/",subject)
        .then((res) => {
            dispatch({
                type: ADD_SUBJECTS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};