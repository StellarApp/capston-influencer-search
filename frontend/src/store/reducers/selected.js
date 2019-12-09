import { SET_SELECTED, TOGGLE_SELECTED } from "../constants";

const selectedReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SELECTED:
      return action.selected;
    case TOGGLE_SELECTED:
      const { selected } = action;
      if (state.includes(selected)) {
        return state.filter(s => s !== selected);
      }
      return [...state, selected];
    default:
      return state;
  }
};

export default selectedReducer;
