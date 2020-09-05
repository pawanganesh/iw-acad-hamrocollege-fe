import axios from "axios";

import { GET_SEMESTERS, DELETE_SEMESTERS, ADD_SEMESTERS } from "./types";

export const getSemesters = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/api/semesterlist/")
    .then((res) => {
      dispatch({
        type: GET_SEMESTERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
export const deleteSemesters = (id) => (dispatch) => {
  axios
    .delete(`http://127.0.0.1:8000/api/semesterlist/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_SEMESTERS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addSemesters = (semester) => (dispatch) => {
  axios
    .post("http://127.0.0.1:8000/api/semesterlist/", semester)
    .then((res) => {
      dispatch({
        type: ADD_SEMESTERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
