import { combineReducers } from 'redux';
import subContractorReducer from './subContractorReducer';
import gridReducer from './gridReducer';
import authReducer from "./authReducer";
const rootReducer = combineReducers({
  scr: subContractorReducer,
  grid: gridReducer,
  auth: authReducer,
});

export default rootReducer;
