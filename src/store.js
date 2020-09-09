import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import promise from 'redux-promise-middleware';
const { logger } = require(`redux-logger`);
let middlewares = [];

middlewares.push(logger);
middlewares.push(thunk);
middlewares.push(promise);
export default createStore(rootReducer, {}, applyMiddleware(...middlewares));
