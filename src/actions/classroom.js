import axios from "axios";
import { createMessage } from "./messages";
import { tokenConfig } from "./auth";
import {
  DELETE_NOTICES,
  GET_CATEGORY,
  GET_ERRORS,
  GET_CLASSROOMDISCUSSION,
  GET_CLASSROOM,
  ADD_CLASSROOM,
} from "./types";

//GET CLASSROOM DISCUSSION
export const getClassroomDiscussion = () => (dispatch, getState) => {
  axios
    .get(`http://127.0.0.1:8000/api/discussion/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_CLASSROOMDISCUSSION,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
//GET CLASSROOM
export const getClassroom = () => (dispatch, getState) => {
  axios
    .get(`http://127.0.0.1:8000/api/classroom/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_CLASSROOM,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE NOTICE
export const deleteNotice = (id) => (dispatch, getState) => {
  axios
    .delete(`http://127.0.0.1:8000/api/notice/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteNotice: "Notice Deleted" }));
      dispatch({
        type: DELETE_NOTICES,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// GET CATEGORY

export const getCategory = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/category/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_CATEGORY,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// ADD CLASSROOM

export const addClassroom = (body) => (dispatch, getState) => {
  // Request Body
  // const body = JSON.stringify({
  //   title,
  //   creator,
  //   faculty,
  //   section,
  //   subject,
  // });

  axios
    .post("http://127.0.0.1:8000/api/classroom/", body, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addClassroom: "Classroom Added" }));
      dispatch({
        type: ADD_CLASSROOM,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};

// REGISTER USER

export const register = ({ first_name, last_name, email, password }) => (
  dispatch
) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ first_name, last_name, email, password });

  axios
    .post("http://127.0.0.1:8000/api/auth/register/", body, config)
    .then((res) => {
      dispatch({
        // type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      // dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        // type: REGISTER_FAIL,
        type: GET_ERRORS,
        payload: errors,
      });
    });
};

//GET USER DETAILS

export const getUserProfile = (username) => (dispatch, getState) => {
  axios
    .get(
      `http://127.0.0.1:8000/api/auth/userprofile/${username}`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        // type: GET_USERPROFILE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
