import { SET_CONTACTS, ADD_CONTACT } from "../constants";

const contactReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return action.constacts;
    case ADD_CONTACT:
      return [...state, action.contact];
    default:
      return state;
  }
};

export default contactReducer;
