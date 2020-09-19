import { LIST_ROLES } from '../actions/types';

const initialState = {
  listRoleDetails: [],
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

    default:
      return state;
  }
}
