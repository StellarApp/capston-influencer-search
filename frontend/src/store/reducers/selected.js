import { SET_SELECTED, ADD_SELECTED, REMOVE_SELECTED } from "../constants";

const selectedReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SELECTED:
      return action.selected;
    case ADD_SELECTED:
      return [...state, action.selected];
    case REMOVE_SELECTED:
      return state.filter(selected => selected !== action.selected);
    default:
      return state;
  }
};

export default selectedReducer;
