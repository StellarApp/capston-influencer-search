import { SET_AUTH, ADD_TO_AUTH, DELETE_AUTH } from "../constants";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    case ADD_TO_AUTH:
      delete action.type;
      return {
        ...state,
        ...action
      };
    case DELETE_AUTH:
      return action.auth;
    default:
      return state;
  }
};

export default authReducer;
