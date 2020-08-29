import axios from "axios";

import { GET_CLUBS, DELETE_CLUBS } from './types';

export const getClubs = () => dispatch => {
    axios
    .get(`http://127.0.0.1:8000/api/Club/Club/`)
    .then((res) => {
        dispatch({
            type: GET_CLUBS,
            payload: res.data,
        });
    })
    .catch((err) => console.log(err));
};

export const deleteClub = (id) => (dispatch) => {
    axios
    .delete(`http://127.0.0.1:8000/api/Club/Club/${id}/`)
    .then((res) => {
        dispatch({
            type: DELETE_CLUBS,
            payload: id,
        });
    })
    .catch((err) => console.log(err));
}
