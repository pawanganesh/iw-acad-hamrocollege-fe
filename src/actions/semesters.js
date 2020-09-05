import axios from "axios";
import { tokenConfig } from "../actions/auth";

import { GET_SEMESTERS, DELETE_SEMESTERS, ADD_SEMESTERS } from "./types";

export const getSemesters = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/semesterlist/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SEMESTERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
export const deleteSemesters = (id) => (dispatch, getState) => {
  axios
    .delete(
      `http://127.0.0.1:8000/api/semesterlist/${id}/`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: DELETE_SEMESTERS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addSemesters = (semester) => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/semesterlist/",
      semester,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_SEMESTERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
