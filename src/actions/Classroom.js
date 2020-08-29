import axios from "axios";

import { GET_CLASSROOMS, DELETE_CLASSROOMS } from './types';

export const getClassrooms = () => dispatch => {
    axios
    .get(`http://127.0.0.1:8000/api/classroom/classroom/`)
    .then((res) => {
        dispatch({
            type: GET_CLASSROOMS,
            payload: res.data,
        });
    })
    .catch((err) => console.log(err));
};

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
}
