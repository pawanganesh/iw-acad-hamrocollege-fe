import {
  GET_NOTICES,
  DELETE_NOTICES,
  ADD_NOTICE,
  CLEAR_NOTICE,
} from "../actions/types.js";

const initialState = {
  notices: [],
};

const noticeReducer = (state = initialState, action) => {
  // console.log("Action is:", action);
  // console.log("state is:", state);

  switch (action.type) {
    case GET_NOTICES: {
      return {
        ...state,
        notices: action.payload,
      };
    }

    case ADD_NOTICE:
      return {
        ...state,
        notices: [...state.notices, action.payload],
      };

    case CLEAR_NOTICE:
      return {
        ...state,
        notices: [],
      };

    case DELETE_NOTICES:
      return {
        ...state,
        notices: state.notices.filter((notice) => notice.id !== action.payload),
      };

    default:
      return state;
  }
};

export default noticeReducer;
