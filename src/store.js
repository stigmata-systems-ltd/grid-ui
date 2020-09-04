import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
let middlewares = []
if (process.env.NODE_ENV === `local` || process.env.NODE_ENV === `dev`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}
middlewares.push(thunk);
export default  createStore(rootReducer, {}, applyMiddleware(...middlewares));