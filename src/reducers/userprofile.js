import { GET_USERPROFILE } from "../actions/types.js";

const initialState = {
  userprofile: [],
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERPROFILE:
      return {
        ...state,
        userprofile: action.payload,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
