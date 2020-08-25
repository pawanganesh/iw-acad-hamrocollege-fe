import { GET_NOTICES, DELETE_NOTICES } from "../actions/types.js";

const initialState = {
  notices: [],
};

const noticeReducer = (state = initialState, action) => {
  console.log("Action is:", action);
  console.log("state is:", state);

  switch (action.type) {
    case GET_NOTICES: {
      return {
        ...state,
        notices: action.payload,
      };
    }

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
