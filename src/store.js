import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
let middlewares = []
if (process.env.NODE_ENV === `local` || process.env.NODE_ENV === `dev`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}
middlewares.push(thunk);
export default function storeConfig(initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
}
