import { combineReducers } from 'redux';
import subContractorReducer from './subContractorReducer';
import gridReducer from './gridReducer';
import gridDetailsReducer from './gridDetailsReducer';
import { userSigninReducer } from './signinReducer';
import { clientBillingReducer } from './clientBillingReducer';
const rootReducer = combineReducers({
  scr: subContractorReducer,
  grid: gridReducer,
  gridDetails : gridDetailsReducer,
  userSignin : userSigninReducer,
  clientBilling :clientBillingReducer
});

export default rootReducer;
