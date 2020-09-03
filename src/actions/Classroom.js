import axios from "axios";

import { GET_CLASSROOMS, DELETE_CLASSROOMS, GET_FACULTY, GET_SECTIONS, GET_SUBJECTS, ADD_CLASSROOM_SUCCESS, ADD_MEMBER_SUCCESS, } from './types';

//GET CLASSROOMS

export const getClassrooms = () => dispatch => {
    axios
    .get('http://127.0.0.1:8000/api/class/classroom/')
    .then((res) => {
        console.log(res.data)
        dispatch({
            type: GET_CLASSROOMS,
            payload: res.data,
        });
    })
    .catch((err) => console.log(err));
};

//DELETE CLASSROOM

export const deleteClassroom = (id) => (dispatch) => {
    axios
    .delete(`http://127.0.0.1:8000/api/class/classroom/${id}/`)
    .then((res) => {
        dispatch({
            type: DELETE_CLASSROOMS,
            payload: id,
        });
    })
    .catch((err) => console.log(err));
}


//ADD CLASSROOM

export const addClassroom = (classroom) => (dispatch) => {
    axios
    .post("http://127.0.0.1:8000/api/class/classroom",classroom)
    .then((res) => {
        dispatch({
            type: ADD_CLASSROOM_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => console.log(err));
}

//GET USERS

// export const getUsers = () => dispatch => {
//     axios
//     .get('http://127.0.0.1:8000/api/account/')
//     .then((res) => {
//         dispatch({
//             type: GET_USERS,
//             payload: res.data,
//         });
//     })
//     .catch((err) => console.log(err));
// };

//GET Faculty
export const getFaculty = () => dispatch => {
    axios
    .get('http://127.0.0.1:8000/api/college/faculty/')
    .then((res) => {
        // console.log('faculty',res.data)
        dispatch({
            type: GET_FACULTY,
            payload: res.data,

        });
    })
    .catch((err) => console.log(err));
};


//GET SECTION
export const getSection = () => dispatch => {
    axios
    .get('http://127.0.0.1:8000/api/college/section/')
    .then((res) => {
        console.log('sec:',res.data)
        
        dispatch({
            type: GET_SECTIONS,
            payload: res.data,

        });
    })
    .catch((err) => console.log(err));
};


//GET SUBJECT
export const getSubject = () => dispatch => {
    axios
    .get('http://127.0.0.1:8000/api/college/subjectlist/')
    .then((res) => {
        console.log('sub:',res.data)
        dispatch({
            type: GET_SUBJECTS,
            payload: res.data,

        });
    })
    .catch((err) => console.log(err));
};


export const addClassMember = (member) => (dispatch) => {
    axios
    .post("http://127.0.0.1:8000/api/class/",member)
    .then((res) => {
        dispatch({
            type: ADD_MEMBER_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => console.log(err));
}

