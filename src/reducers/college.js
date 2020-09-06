import { GET_SUBJECT, GET_FACULTY, GET_SECTION } from "../actions/types";

const initialState = {
  sections: [],
  subjects: [],
  faculty: [],
};

const collegeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBJECT: {
      return {
        ...state,
        subjects: action.payload,
      };
    }

    case GET_FACULTY: {
      return {
        ...state,
        faculty: action.payload,
      };
    }

    case GET_SECTION: {
      return {
        ...state,
        sections: action.payload,
      };
    }

    default:
      return state;
  }
};

export default collegeReducer;
