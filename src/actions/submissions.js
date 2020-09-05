import axios from "axios";
import { tokenConfig } from "../actions/auth";

import { GET_SUBMISSIONS, DELETE_SUBMISSIONS, ADD_SUBMISSIONS } from "./types";

export const getSubmissions = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/submission/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SUBMISSIONS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
export const deleteSubmissions = (id) => (dispatch, getState) => {
  axios
    .delete(
      `http://127.0.0.1:8000/api/submission/${id}/`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: DELETE_SUBMISSIONS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addSubmissions = (submission) => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/submission/",
      submission,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_SUBMISSIONS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
