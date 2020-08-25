import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_NOTICES, DELETE_NOTICES } from "./types";

//GET NOTICES
export const getNotices = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/api/notice/")
    .then((res) => {
      dispatch({
        type: GET_NOTICES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE NOTICE
export const deleteNotice = (id) => (dispatch) => {
  axios
    .delete(`http://127.0.0.1:8000/api/notice/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_NOTICES,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
