import axios from "axios";
import { createMessage } from "./messages";
import { tokenConfig } from "./auth";
import {
  GET_NOTICES,
  DELETE_NOTICES,
  GET_CATEGORY,
  ADD_NOTICE_SUCCESS,
  GET_ERRORS,
} from "./types";

//GET NOTICES
export const getNotices = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/notice/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_NOTICES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// ADD NOTICE

// export const addNotice = (notice) => (dispatch, getState) => {
//   axios
//     .post("http://127.0.0.1:8000/api/notice/", notice, tokenConfig(getState))
//     .then((res) => {
//       dispatch(createMessage({ addNotice: "Notice Added" }));
//       dispatch({
//         type: ADD_NOTICE,
//         payload: res.data,
//       });
//     })
//     .catch((err) =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

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

// ADD NOTICE

export const addNotice = ({ text, file, category, author, likes }) => (
  dispatch,
  getState
) => {
  // // Headers
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  // Request Body
  const body = JSON.stringify({ text, file, category, author, likes });

  axios
    .post("http://127.0.0.1:8000/api/notice/", body, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addNotice: "Notice Added" }));
      dispatch({
        type: ADD_NOTICE_SUCCESS,
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
