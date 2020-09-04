import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
let middlewares = [];
if (process.env.NODE_ENV === `local` || process.env.NODE_ENV === `dev`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}
middlewares.push(thunk);

export default function storeConfig(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
