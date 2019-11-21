import {SET_AUTH, DELETE_AUTH }from "../constants";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    case DELETE_AUTH:
      return action.auth;
    default:
      return state;
  }
};

export default authReducer ;