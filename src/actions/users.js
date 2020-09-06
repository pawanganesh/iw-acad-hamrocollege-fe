import axios from "axios";
import { tokenConfig } from "./auth";
import { GET_USERLIST, DELETE_USER, GET_USERDETAIL } from "./types";
import { createMessage } from "./messages";

export const getUserList = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/auth/userlist/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_USERLIST,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE NOTICE
export const deleteUser = (id) => (dispatch, getState) => {
  axios
    .delete(
      `http://127.0.0.1:8000/api/auth/deleteuser/${id}/`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch(createMessage({ deleteUser: "User Deleted" }));
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//GET USER DETAILS

export const getUserDetails = (id) => (dispatch, getState) => {
  axios
    .get(
      `http://127.0.0.1:8000/api/auth/userprofile/${id}`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: GET_USERDETAIL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
