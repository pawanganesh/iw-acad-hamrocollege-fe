import axios from "axios";
import { tokenConfig } from "../actions/auth";

import { GET_ISSUES, DELETE_ISSUES, ADD_ISSUES } from "./types";

export const getIssues = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/bookissue/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ISSUES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
export const deleteIssues = (id) => (dispatch, getState) => {
  axios
    .delete(`http://127.0.0.1:8000/api/bookissue/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_ISSUES,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addIssues = (issue) => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/bookissue/", issue, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_ISSUES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
