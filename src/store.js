import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import promise from "redux-promise-middleware";
import logger from 'redux-logger';

let middlewares = []
if (process.env.NODE_ENV === `local` || process.env.NODE_ENV === `dev`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}
middlewares.push(thunk);
middlewares.push(promise);
middlewares.push(logger);

export default createStore(
  rootReducer, applyMiddleware(
          ...middlewares
      ))