import { combineReducers } from 'redux';

import authReducer from './auth';
import creatorReducer from './creators';

const reducer = combineReducers({
  auth: authReducer,
  creators:  creatorReducer
});

export default reducer;
