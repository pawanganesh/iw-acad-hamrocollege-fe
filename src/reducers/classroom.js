import {
  GET_CLASSROOMDISCUSSION,
  GET_CLASSROOM,
  ADD_CLASSROOM,
} from "../actions/types.js";

const initialState = {
  classrooms: [],
  classroomDiscussions: [],
};

const classroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLASSROOMDISCUSSION: {
      return {
        ...state,
        classroomDiscussions: action.payload,
      };
    }
    case GET_CLASSROOM: {
      return {
        ...state,
        classrooms: action.payload,
      };
    }
    case ADD_CLASSROOM: {
      return {
        ...state,
        classrooms: [...state.classrooms, action.payload],
      };
    }
    default:
      return state;
  }
};

export default classroomReducer;
