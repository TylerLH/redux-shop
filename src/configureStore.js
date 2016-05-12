import * as reducers from 'reducers';
import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk)
);

const rootReducer = combineReducers({ ...reducers, routing: routerReducer });

export default createStore(rootReducer, enhancer);
