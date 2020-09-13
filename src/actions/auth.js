import axios from "axios";
import { returnErrors } from "./messages";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  GET_ERRORS,
  GET_USERPROFILE,
} from "./types";

//CHECK TOKEN & LOAD USER

export const loadUser = () => (dispatch, getState) => {
  //User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get("http://127.0.0.1:8000/api/auth/user/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// LOGIN USER

export const login = (username, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post("http://127.0.0.1:8000/api/auth/login/", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

//LOGOUT USER

export const logout = () => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/auth/logout/", null, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Setup config with token - Helper Function
export const tokenConfig = (getState) => {
  //Get token from state
  const token = getState().auth.token;


  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};

// Setup config with token - Helper Function
export const tokenConfigFile = (getState) => {
  //Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  //If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
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
        type: REGISTER_SUCCESS,
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
      `http://127.0.0.1:8000/api/auth/userprofile/${username}/`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: GET_USERPROFILE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
