import axios from "axios";

import { GET_CLUBS, DELETE_CLUB, ADD_CLUB_SUCCESS, ADD_ANNOUNCEMENT_SUCCESS } from './types';

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
            type: DELETE_CLUB,
            payload: id,
        });
    })
    .catch((err) => console.log(err));
}

export const addClubMember = (member) => (dispatch) => {
    axios
    .post("http://127.0.0.1:8000/api/club/",member)
    .then((res) => {
        dispatch({
            type: ADD_CLUB_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => console.log(err));
}

export const addAnnouncement = (message) => (dispatch) => {
    axios
    .post("http://127.0.0.1:8000/api/club/announcment",message)
    .then((res) => {
        dispatch({
            type: ADD_ANNOUNCEMENT_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => console.log(err));
}

