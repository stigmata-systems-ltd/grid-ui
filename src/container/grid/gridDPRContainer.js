import { connect } from 'react-redux';
import GridDPR from '../../pages/gridDPR/GridDPR';
import store from '../../store';
import { gridNoList, addCGData } from '../../actions/gridActions';
import {
  GRID_NO_LIST,
  GRID_NO,
  RFI_APPROVAL,
  RFI_INSPECTION_DATE,
  RFI_APPROVAL_DATE,
  RFI_NO,
} from '../../actions/types';

const mapDispatchToProps = dispatch => {
  console.log('Grid DPR dispatcher');
  return {
    fetchGridNoData() {
      dispatch(gridNoList());
    },
    addCGData() {
      dispatch(addCGData());
    },
    handleGridNoChange(value) {
      console.log(`Grid Container Grid Number change: ${value}`);
      dispatch({
        type: GRID_NO,
        payload: value,
      });
    },
    handleApprovalChange(value) {
      console.log(`Grid Container Approval change: ${value}`);
      dispatch({
        type: RFI_APPROVAL,
        payload: value,
      });
    },
    handleRFINoChange(value) {
      console.log(`Grid Container RFINo change: ${value}`);
      dispatch({
        type: RFI_NO,
        payload: value,
      });
    },
    handleInspectionDateChange(value) {
      console.log(`Grid Container Inspection Date change: ${value}`);
      dispatch({
        type: RFI_INSPECTION_DATE,
        payload: value,
      });
    },
    handleApprovalDateChange(value) {
      console.log(`Grid Container Approval Date change: ${value}`);
      dispatch({
        type: RFI_APPROVAL_DATE,
        payload: value,
      });
    },
  };
};

const mapStateToProps = state => {
  const grid = store.getState().grid;
  console.log(`Grid DPR State: ${JSON.stringify(grid)}`);

  return {
    grid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridDPR);
