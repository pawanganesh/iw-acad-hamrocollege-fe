import axios from "axios";

import {
  GET_CLASSROOMS,
  DELETE_CLASSROOMS,
  GET_USERS,
  ADD_CLASSROOM_SUCCESS,
} from "./types";

//GET CLASSROOMS

export const getClassrooms = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/api/classroom/classroom/")
    .then((res) => {
      dispatch({
        type: GET_CLASSROOMS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//DELETE CLASSROOM

export const deleteClassroom = (id) => (dispatch) => {
  axios
    .delete(`http://127.0.0.1:8000/api/classroom/classroom/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_CLASSROOMS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//ADD CLASSROOM

export const addClassroom = (classroom) => (dispatch) => {
  axios
    .post("http://127.0.0.1:8000/api/classroom/classroom", classroom)
    .then((res) => {
      dispatch({
        type: ADD_CLASSROOM_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//GET USERS

export const getUsers = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/api/account/")
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//GET SUBJECT
