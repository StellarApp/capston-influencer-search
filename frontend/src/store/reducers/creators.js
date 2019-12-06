import { SET_CREATORS } from "../constants";

const creatorReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CREATORS:
      return action.creators;
    default:
      return state;
  }
};

export default creatorReducer;
