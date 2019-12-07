import { combineReducers } from 'redux';

import authReducer from "./auth";
import creatorReducer from "./creators";
import collectionReducer from "./collections";
import keywordReducer from "./keywords";
import contactReducer from './contacts';

const reducer = combineReducers({
  auth: authReducer,
  creators: creatorReducer,
  collections: collectionReducer,
  keywords: keywordReducer,
  contacts: contactReducer

});

export default reducer;
