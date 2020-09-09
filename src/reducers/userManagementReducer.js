import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  MOBILE_NO,
  USERNAME,
  PASSWORD,
  ROLENAME,
  ADD_USER,
} from '../actions/types';

const initialState = {
  addUser: {},
  roleList: [
    { id: 'New', gridName: 'New' },
    { id: 'Completed', gridName: 'Completed' },
  ],
};

export default function(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case FIRST_NAME:
      console.log(action);
      return {
        ...state,
        firstName: action.payload,
      };
    case LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case MOBILE_NO:
      return {
        ...state,
        mobileNo: action.payload,
      };
    case USERNAME:
      return {
        ...state,
        userName: action.payload,
      };
    case PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case ROLENAME:
      return {
        ...state,
        roleName: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        addUser: action.payload,
      };
    default:
      return state;
  }
}
