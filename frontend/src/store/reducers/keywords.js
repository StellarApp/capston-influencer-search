import { SET_KEYWORDS } from '../constants';

const keywordReducer = (state = [], action) => {
  switch (action.type) {
    case SET_KEYWORDS:
      return action.keywords;
    default:
      return state;
  }
};

export default keywordReducer;
