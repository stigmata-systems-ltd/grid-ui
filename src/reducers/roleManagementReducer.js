import {
  LIST_ROLES,
  LIST_ROLES_ID,
  UPDATE_PAGE_ACCESS,
  UPDATE_PAGE_ACCESS_ROLES,
} from '../actions/types';

const initialState = {
  listRoleDetails: [],
  listRoleDetailsID: [],
  updatePage: { message: '' },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${LIST_ROLES}_FULFILLED`:
      console.log(`List SCR: ${action.payload.data}`);
      // const listSCR = action.payload.data.map(e => ({
      //   subContractorCode: e.code,
      //   name: e.name,
      // }));

      return {
        ...state,
        listRoleDetails: action.payload.data,
      };

    case `${LIST_ROLES}_REJECTED`:
      console.log(action);
      return {
        ...state,
        listRoleDetails: [],
      };
    case `${LIST_ROLES_ID}_FULFILLED`:
      console.log(`List SCR: ${action.payload.data}`);
      // const listSCR = action.payload.data.map(e => ({
      //   subContractorCode: e.code,
      //   name: e.name,
      // }));

      return {
        ...state,
        listRoleDetailsID: action.payload.data,
      };
    case `${LIST_ROLES_ID}_REJECTED`:
      console.log(action);
      return {
        ...state,
        listRoleDetailsID: [],
      };

    case UPDATE_PAGE_ACCESS:
      console.log(`UPDATE_PAGE_ACCESS: ${action.payload}`);

      return {
        ...state,
        listRoleDetailsID: action.payload,
      };
    case `${UPDATE_PAGE_ACCESS_ROLES}_FULFILLED`:
      console.log(`UPDATE_PAGE_ACCESS_ROLES: ${action.payload}`);
      return {
        ...state,
        updatePage: {
          message: 'Role has been update Successfully',
          variant: 'success',
        },
      };
    case `${UPDATE_PAGE_ACCESS_ROLES}_REJECTED`:
      console.log(`UPDATE_PAGE_ACCESS_ROLES REJECTED: ${action.payload}`);
      return {
        ...state,
        updatePage: {
          message: 'Error Occurred',
          variant: 'danger',
        },
      };
    default:
      return state;
  }
}
