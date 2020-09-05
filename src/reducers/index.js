import { combineReducers } from 'redux';
import subContractorReducer from './subContractorReducer';
import gridReducer from './gridReducer';
const rootReducer = combineReducers({
  scr: subContractorReducer,
  grid: gridReducer,
});

export default rootReducer;
