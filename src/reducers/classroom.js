import { GET_CLASSROOMDISCUSSION } from "../actions/types.js";

const initialState = {
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
    default:
      return state;
  }
};

export default classroomReducer;
