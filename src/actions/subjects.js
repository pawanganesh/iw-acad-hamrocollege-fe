import axios from "axios";
import { tokenConfig } from "../actions/auth";

import { GET_SUBJECTS, DELETE_SUBJECTS, ADD_SUBJECTS } from "./types";

export const getSubjects = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/subjectlist/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SUBJECTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
export const deleteSubjects = (id) => (dispatch, getState) => {
  axios
    .delete(
      `http://127.0.0.1:8000/api/subjectlist/${id}/`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: DELETE_SUBJECTS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addSubjects = (subject) => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/subjectlist/",
      subject,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_SUBJECTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
