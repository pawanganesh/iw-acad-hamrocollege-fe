import {
  GET_SUBMISSIONS,
  DELETE_SUBMISSIONS,
  ADD_SUBMISSIONS,
} from "../actions/types";

const initialState = {
  submissions: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SUBMISSIONS:
      return {
        ...state,
        submissions: action.payload,
      };
    case DELETE_SUBMISSIONS:
      return {
        ...state,
        submissions: state.submissions.filter(
          (submission) => submission.id !== action.payload
        ),
      };

    case ADD_SUBMISSIONS:
      return {
        ...state,
        submissions: [...state.submissions, action.payload],
      };

    default:
      return state;
  }
}
