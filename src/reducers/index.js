import { combineReducers } from 'redux';
import subContractorReducer from './subContractorReducer';
import authReducer from './authReducer';
import gridReducer from './gridReducer';

import userManagementReducer from './userManagementReducer';
const rootReducer = combineReducers({
  scr: subContractorReducer,
  grid: gridReducer,
  user: userManagementReducer,
  auth: authReducer,
});

export default rootReducer;
