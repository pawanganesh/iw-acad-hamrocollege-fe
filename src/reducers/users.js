import { GET_USERLIST, DELETE_USER, GET_USERDETAIL } from "../actions/types";

const initialState = {
  users: [],
  userdetails: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERLIST:
      return {
        ...state,
        users: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case GET_USERDETAIL:
      return {
        ...state,
        userdetails: action.payload,
      };

    default:
      return state;
  }
}
