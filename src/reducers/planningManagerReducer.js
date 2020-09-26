import {
  LIST_LAYER_PM,
  APPROVE_LAYER_PM,
  SHOW_PM_VIEW_MODEL,
  VIEW_MODEL_RESULT,
} from '../actions/types';

const initialState = {
  layerList: [],
  approveLayer: { message: '' },
  showPMViewModal: false,
  viewGridNumber: '',
  viewLayerNumber: '',
  viewRfiLVApprovalDate: '',
  viewRfiLVApprovalStatus: '',
  viewRfiCTApprovalDate: '',
  viewRfiCTApprovalStatus: '',
  viewLayerStatus: '',
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

    case SHOW_PM_VIEW_MODEL:
      console.log(action);
      return {
        ...state,
        showPMViewModal: action.payload,
      };
    case VIEW_MODEL_RESULT:
      const result = action.payload;
      return {
        ...state,
        viewGridNumber: result[0].gridNo,
        viewLayerNumber: result[0].layerNo,
        viewRfiLVApprovalDate: result[0].lV_approval_date,
        viewRfiLVApprovalStatus: result[0].lV_RFI_status,
        viewRfiCTApprovalDate: result[0].cT_approval_date,
        viewRfiCTApprovalStatus: result[0].cT_RFI_status,
        viewLayerStatus: result[0].status,
      };

    default:
      return state;
  }
}
