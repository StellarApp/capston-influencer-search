import { combineReducers } from 'redux';

import userReducer from './users';

const reducer = combineReducers({
  user: userReducer
});

export default reducer;
