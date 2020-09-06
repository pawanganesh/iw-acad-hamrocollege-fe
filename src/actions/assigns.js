import axios from "axios";
import { tokenConfig } from "../actions/auth";

import { GET_ASSIGNS, DELETE_ASSIGNS, ADD_ASSIGNS } from "./types";

export const getAssigns = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/assignment/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ASSIGNS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteAssigns = (id) => (dispatch, getState) => {
  axios
    .delete(
      `http://127.0.0.1:8000/api/assignment/${id}/`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: DELETE_ASSIGNS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addAssigns = (assign) => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/assignment/",
      assign,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_ASSIGNS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
