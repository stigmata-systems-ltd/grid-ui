import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import promise from "redux-promise-middleware";
let middlewares = [];
if (process.env.NODE_ENV === `local` || process.env.NODE_ENV === `dev`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}
middlewares.push(thunk);
middlewares.push(promise);
export default createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middlewares)
  )
);
