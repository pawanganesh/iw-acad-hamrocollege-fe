import axios from "axios";
import { createMessage } from "./messages";
import { tokenConfig } from "./auth";
import { GET_NOTICES, DELETE_NOTICES } from "./types";

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
