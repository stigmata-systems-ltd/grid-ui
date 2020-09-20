import { combineReducers } from 'redux';
import subContractorReducer from './subContractorReducer';
import authReducer from './authReducer';
import gridReducer from './gridReducer';
import clientReducer from './clientReducer';
import roles from './roleManagementReducer';

import userManagementReducer from './userManagementReducer';
const rootReducer = combineReducers({
  scr: subContractorReducer,
  grid: gridReducer,
  user: userManagementReducer,
  auth: authReducer,
  client: clientReducer,
  roles,
});

export default rootReducer;
