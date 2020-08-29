import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import { GET_NOTICES, DELETE_NOTICES, ADD_NOTICE } from "./types";

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

export const addNotice = (notice) => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/notice/", notice, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addNotice: "Notice Added" }));
      dispatch({
        type: ADD_NOTICE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
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
