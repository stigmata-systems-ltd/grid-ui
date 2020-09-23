import { LIST_LAYER_PM, APPROVE_LAYER_PM } from '../actions/types';

const initialState = {
  layerList: [],
  approveLayer: { message: '' },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${LIST_LAYER_PM}_FULFILLED`:
      console.log(`List SCR: ${action.payload.data}`);
      return {
        ...state,
        layerList: action.payload.data,
      };
    case `${LIST_LAYER_PM}_REJECTED`:
      console.log(action);
      return {
        ...state,
        layerList: [],
      };
    case `${APPROVE_LAYER_PM}_FULFILLED`:
      console.log(`List SCR: ${action.payload.data}`);
      return {
        ...state,
        approveLayer: {
          message: 'Layer has been approved successfully',
          variant: 'success',
        },
      };
    case `${APPROVE_LAYER_PM}_REJECTED`:
      console.log(action);
      return {
        ...state,
        approveLayer: { message: 'Error Occurred', variant: 'danger' },
      };

    default:
      return state;
  }
}
