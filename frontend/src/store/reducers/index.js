import { combineReducers } from 'redux';

import authReducer from "./auth";
import creatorReducer from "./creators";
import collectionReducer from "./collections";
import keywordReducer from "./keywords";

const reducer = combineReducers({
  auth: authReducer,
  creators: creatorReducer,
  collections: collectionReducer,
  keywords: keywordReducer
});

export default reducer;
