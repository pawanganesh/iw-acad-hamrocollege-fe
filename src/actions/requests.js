import axios from "axios";
import { tokenConfig } from "../actions/auth";

import { GET_REQUESTS, DELETE_REQUESTS, ADD_REQUESTS } from "./types";

export const getRequests = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/bookrequest/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_REQUESTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
export const deleteRequests = (id) => (dispatch, getState) => {
  axios
    .delete(
      `http://127.0.0.1:8000/api/bookrequest/${id}/`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: DELETE_REQUESTS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addRequests = (request) => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/bookrequest/",
      request,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_REQUESTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
