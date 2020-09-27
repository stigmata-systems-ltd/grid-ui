import {
  LIST_SUBCONTRACTOR_REPORT,
  LIST_MASTER_REPORT,
  FROM_DATE_MASTER,
  TO_DATE_MASTER,
  FROM_DATE_SCR,
  TO_DATE_SCR,
} from '../actions/types';

const initialState = {
  listSubContractorReport: [],
  listMasterReport: [],
  fromDateMaster: '',
  toDateMaster: '',
  fromDateSCR: '',
  toDateSCR: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${LIST_SUBCONTRACTOR_REPORT}_FULFILLED`:
      return {
        ...state,
        listSubContractorReport: action.payload.data,
        islistSCRReportLoading: false,
      };
    case `${LIST_SUBCONTRACTOR_REPORT}_PENDING`:
      return {
        ...state,
        islistSCRReportLoading: true,
      };
    case `${LIST_SUBCONTRACTOR_REPORT}_REJECTED`:
      return {
        ...state,
        listSubContractorReport: [],
        islistSCRReportLoading: false,
      };

    case `${LIST_MASTER_REPORT}_FULFILLED`:
      return {
        ...state,
        listMasterReport: action.payload.data,
        islistMasterReportLoading: false,
      };
    case `${LIST_MASTER_REPORT}_PENDING`:
      return {
        ...state,

        islistMasterReportLoading: true,
      };
    case `${LIST_MASTER_REPORT}_REJECTED`:
      return {
        ...state,
        listMasterReport: [],
        islistMasterReportLoading: false,
      };
    case FROM_DATE_MASTER:
      return {
        ...state,
        fromDateMaster: action.payload,
      };
    case TO_DATE_MASTER:
      return {
        ...state,
        toDateMaster: action.payload,
      };
    case FROM_DATE_SCR:
      return {
        ...state,
        fromDateSCR: action.payload,
      };
    case TO_DATE_SCR:
      return {
        ...state,
        toDateSCR: action.payload,
      };
    default:
      return state;
  }
}
