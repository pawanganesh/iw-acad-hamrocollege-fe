import axios from "axios";

import { GET_ATTENDANCE, } from './types';

export const getAttendance = () => dispatch => {
    axios
    .get(`http://127.0.0.1:8000/api/Club/Club/`)
    .then((res) => {
        dispatch({
            type: GET_ATTENDANCE,
            payload: res.data,
        });
    })
    .catch((err) => console.log(err));
};

