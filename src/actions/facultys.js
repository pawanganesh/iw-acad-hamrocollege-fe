import axios from "axios";
import { tokenConfig } from "../actions/auth";

import { GET_FACULTYS, DELETE_FACULTYS, ADD_FACULTYS } from "./types";

export const getFacultys = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/faculty/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_FACULTYS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
export const deleteFacultys = (id) => (dispatch, getState) => {
  axios
    .delete(`http://127.0.0.1:8000/api/faculty/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_FACULTYS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addFacultys = (faculty) => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/faculty/", faculty, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_FACULTYS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
