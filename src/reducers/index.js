import { combineReducers } from 'redux';
import subContractorReducer from './subContractorReducer';
import authReducer from './authReducer';
import gridReducer from './gridReducer';
import userManagementReducer from './userManagementReducer';
import gridDetailsReducer from './gridDetailsReducer';
import { userSigninReducer } from './signinReducer';
import { clientBillingReducer } from './clientBillingReducer';
const rootReducer = combineReducers({
  scr: subContractorReducer,
  grid: gridReducer,
  gridDetails : gridDetailsReducer,
  userSignin : userSigninReducer,
  clientBilling :clientBillingReducer,
  user: userManagementReducer,

});

export default rootReducer;
