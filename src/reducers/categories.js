import { GET_CATEGORY } from "../actions/types.js";

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    default:
      return state;
  }
};

export default categoryReducer;
