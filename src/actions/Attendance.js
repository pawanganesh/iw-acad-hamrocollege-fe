import axios from "axios";

import { ADD_ATTENDANCE_SUCCESS, } from './types';

export const addAttendance = (flag) => (dispatch) => {
    axios
    .post("http://127.0.0.1:8000/api/attend/attendancesheet/",flag)
    .then((res) => {
        dispatch({
            type: ADD_ATTENDANCE_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => console.log(err));
}
