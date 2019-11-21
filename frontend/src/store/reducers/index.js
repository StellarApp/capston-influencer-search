import { combineReducers } from 'redux';

import userReducer from './users';
import authReducer from './auth';

const reducer = combineReducers({
  user: userReducer,
  auth: authReducer
});

export default reducer;
