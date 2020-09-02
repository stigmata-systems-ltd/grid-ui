import { combineReducers } from 'redux';
import subContractorReducer from './subContractorReducer';
const rootReducer = combineReducers({
  scr: subContractorReducer,
});

export default rootReducer;
