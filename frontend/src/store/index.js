import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as actions from './actions';

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
export { actions };
