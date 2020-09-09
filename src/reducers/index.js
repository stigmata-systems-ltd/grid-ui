import { combineReducers } from 'redux';
import subContractorReducer from './subContractorReducer';
import gridReducer from './gridReducer';
import userManagementReducer from './userManagementReducer';
const rootReducer = combineReducers({
  scr: subContractorReducer,
  grid: gridReducer,
  user: userManagementReducer,
});

export default rootReducer;
