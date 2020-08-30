import {
  GET_NOTICES,
  DELETE_NOTICES,
  CLEAR_NOTICE,
  GET_CATEGORY,
  ADD_NOTICE_SUCCESS,
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

    case GET_CATEGORY: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case ADD_NOTICE_SUCCESS:
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
