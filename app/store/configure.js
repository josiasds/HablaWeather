import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import reducer from '../reducers';

const logger = createLogger({predicate: (getState, action) => __DEV__});

export default (initialState = {}) => {
  const enhancer = compose(applyMiddleware(thunk, logger));

  return createStore(reducer, initialState, enhancer);
};
