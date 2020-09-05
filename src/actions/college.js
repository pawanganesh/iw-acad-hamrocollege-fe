import axios from "axios";
// import { returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import { GET_SUBJECT, GET_FACULTY, GET_SECTION } from "./types";

// GET SECTION

export const getSection = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/section/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SECTION,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// GET FACULTY

export const getFaculty = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/faculty/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_FACULTY,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// GET SUBJECT

export const getSubject = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/subjectlist/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SUBJECT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
