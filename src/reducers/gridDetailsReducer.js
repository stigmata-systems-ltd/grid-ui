import {
    RFI_LEVEL_VERIFICATION
} from '../actions/types';

const initialState = {
    gridRfiLevelData: [],
    approvalOptions: [
        { layerDtlsId: 'New', layerNo: 'New' },
        { layerDtlsId: 'Completed', layerNo: 'Completed' },

        { lV_RFI_status: 'New', lV_RFIno: 'New' },
        { lV_RFI_status: 'Completed', lV_RFIno: 'Completed' },

        { lV_inspection_date: 'New', lV_approval_date: 'New' },
        { lV_inspection_date: 'Completed', lV_approval_date: 'Completed' },

        { lV_RFI_status: 'New'},
        { lV_RFI_status: 'Completed'},


      ],
   
  };
export default function (state = initialState, action) {
    switch (action.type) {
        case `${RFI_LEVEL_VERIFICATION}_FULFILLED`:
            console.log(`GRID NO LIST : ${action.payload}`);
            return {
                ...state,
                gridRfiLevelData: action.payload.data,
            };

        default:
            return state;

    }

}