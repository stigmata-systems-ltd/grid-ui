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
      // const listSCR = action.payload.data.map(e => ({
      //   subContractorCode: e.code,
      //   name: e.name,
      // }));

      return {
        ...state,
        listRoleDetails: action.payload.data,
      };

    case `${LIST_ROLES}_REJECTED`:
      return {
        ...state,
        listRoleDetails: [],
      };
    case `${LIST_ROLES_ID}_FULFILLED`:
      return {
        ...state,
        listRoleDetailsID: action.payload.data,
        isListRoleDetailsIDLoading: false,
      };
    case `${LIST_ROLES_ID}_PENDING`:
      return {
        ...state,
        listRoleDetailsID: [],
        isListRoleDetailsIDLoading: true,
      };
    case `${LIST_ROLES_ID}_REJECTED`:
      return {
        ...state,
        listRoleDetailsID: [],
        isListRoleDetailsIDLoading: false,
      };

    case UPDATE_PAGE_ACCESS:
      return {
        ...state,
        listRoleDetailsID: action.payload,
      };
    case `${UPDATE_PAGE_ACCESS_ROLES}_FULFILLED`:
      return {
        ...state,
        updatePage: {
          message: action.payload.data.message,
          variant: 'success',
        },
        isUpdatePageAccessLoading: false,
      };
    case `${UPDATE_PAGE_ACCESS_ROLES}_PENDING`:
      return {
        ...state,
        isUpdatePageAccessLoading: true,
      };
    case `${UPDATE_PAGE_ACCESS_ROLES}_REJECTED`:
      return {
        ...state,
        updatePage: {
          message: action.payload.response.data.message
            ? action.payload.response.data.message
            : 'Error Occurred',
          variant: 'danger',
        },
        isUpdatePageAccessLoading: false,
      };
    default:
      return state;
  }
}
