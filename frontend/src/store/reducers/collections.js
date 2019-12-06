import {
  SET_COLLECTIONS,
  ADD_COLLECTION,
  DELETE_COLLECTION
} from "../constants";

const collectionReducer = (state = [], action) => {
  switch (action.type) {
    case SET_COLLECTIONS:
      return action.collections;
    case ADD_COLLECTION:
      return [...state, action.collection];
    case DELETE_COLLECTION:
      return state.fileter(
        collection => collection.id !== action.collection.id
      );
    default:
      return state;
  }
};

export default collectionReducer;
