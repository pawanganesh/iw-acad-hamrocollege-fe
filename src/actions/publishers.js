import axios from "axios";
import { tokenConfig } from "../actions/auth";

import { GET_PUBLISHERS, DELETE_PUBLISHERS, ADD_PUBLISHERS } from "./types";

export const getPublishers = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/publisher/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PUBLISHERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
export const deletePublishers = (id) => (dispatch, getState) => {
  axios
    .delete(`http://127.0.0.1:8000/api/publisher/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_PUBLISHERS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addPublishers = (publisher) => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/publisher/",
      publisher,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_PUBLISHERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
