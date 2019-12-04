import { combineReducers } from 'redux';

import authReducer from './auth';
import creatorReducer from './creators';
import collectionReducer from './collections';

const reducer = combineReducers({
  auth: authReducer,
  creators:  creatorReducer,
  collections: collectionReducer
});

export default reducer;
