import {applyMiddleware, createStore, middleware} from 'redux';
import loggers from 'redux-logger';
import rootReducer from './root-reducer';
const middlewares = [loggers];
const store = createStore(rootReducer, applyMiddleware(...middlewares))
export default store;
