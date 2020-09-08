import { connect } from 'react-redux';
import GridDPR from '../../pages/gridDPR/GridDPR';
import store from '../../store';
import {
  gridNoList,
  addCGData,
  layerNoList,
  subContractorList,
  updateLayerProgress,
} from '../../actions/gridActions';
import {
  GRID_NO_LIST,
  GRID_NO,
  RFI_APPROVAL,
  RFI_INSPECTION_DATE,
  RFI_APPROVAL_DATE,
  RFI_NO,
  DATE_OF_FILING,
  AREA_OF_LAYER,
  FILL_MATERIAL,
  FILL_TYPE,
  RFI_NO_LV,
  RFI_NO_CT,
  RFI_INSPECTIONDATE_LV,
  RFI_INSPECTIONDATE_CT,
  RFI_APROVALDATE_LV,
  RFI_APROVALDATE_CT,
  RFI_LV_APPROVAL_STATUS,
  RFI_CT_APPROVAL_STATUS,
  RFI_MATERIAL_DESCRIPTION,
  RFI_REMARKS,
  RFI_FILE_UPLOAD,
  RFI_LAYER_STATUS,
  QUANTITY_CHANGE,
  SUBCONTRACTOR_CHANGE,
  ADD_QUANTITY,
  LAYER_NO,
} from '../../actions/types';

const mapDispatchToProps = dispatch => {
  console.log('Grid DPR dispatcher');
  return {
    fetchGridNoData() {
      dispatch(gridNoList());
    },
    fetchLayerNoData() {
      dispatch(layerNoList());
    },
    fetchSubContractorData() {
      dispatch(subContractorList());
    },
    addCGData() {
      dispatch(addCGData());
    },
    updateLayerProgress() {
      dispatch(updateLayerProgress());
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
    handleDateOfFilingChange(value) {
      console.log(`Grid Container Date Of Filing change: ${value}`);
      dispatch({
        type: DATE_OF_FILING,
        payload: value,
      });
    },
    handleAreaOfLayerChange(value) {
      console.log(`Grid Container Area Of Layer change: ${value}`);
      dispatch({
        type: AREA_OF_LAYER,
        payload: value,
      });
    },
    handleFillTypeChange(value) {
      console.log(`Grid Container Date Of Filing change: ${value}`);
      dispatch({
        type: FILL_TYPE,
        payload: value,
      });
    },
    handleTopLevelFillMaterialChange(value) {
      console.log(`Grid Container Area Of Layer change: ${value}`);
      dispatch({
        type: FILL_MATERIAL,
        payload: value,
      });
    },
    handleRFILVChange(value) {
      dispatch({
        type: RFI_NO_LV,
        payload: value,
      });
    },
    handleRFICTChange(value) {
      dispatch({
        type: RFI_NO_CT,
        payload: value,
      });
    },
    handleRFILVInspectionDateChange(value) {
      dispatch({
        type: RFI_INSPECTIONDATE_LV,
        payload: value,
      });
    },
    handleRFICTInspectionDateChange(value) {
      dispatch({
        type: RFI_INSPECTIONDATE_CT,
        payload: value,
      });
    },
    handleRFILVApprovalDateChange(value) {
      dispatch({
        type: RFI_APROVALDATE_LV,
        payload: value,
      });
    },
    handleRFICTApprovalDateChange(value) {
      dispatch({
        type: RFI_APROVALDATE_CT,
        payload: value,
      });
    },
    handleRFILVApprovalStatusChange(value) {
      dispatch({
        type: RFI_LV_APPROVAL_STATUS,
        payload: value,
      });
    },
    handleRFICTApprovalStatusChange(value) {
      dispatch({
        type: RFI_CT_APPROVAL_STATUS,
        payload: value,
      });
    },
    handleMaterialDescriptionChange(value) {
      dispatch({
        type: RFI_MATERIAL_DESCRIPTION,
        payload: value,
      });
    },
    handleRemarksChange(value) {
      dispatch({
        type: RFI_REMARKS,
        payload: value,
      });
    },
    handleFileUpload(value) {
      dispatch({
        type: RFI_FILE_UPLOAD,
        payload: value,
      });
    },
    handleLayerStatusChange(value) {
      dispatch({
        type: RFI_LAYER_STATUS,
        payload: value,
      });
    },
    handleQuantityChange(value) {
      dispatch({
        type: QUANTITY_CHANGE,
        payload: value,
      });
    },
    handleSubContractorChange(value) {
      dispatch({
        type: SUBCONTRACTOR_CHANGE,
        payload: value,
      });
    },
    addQuantity() {
      const grid = store.getState().grid;
      const data = { quantity: '', subContractorId: '' };
      data.quantity = grid.quantity;
      data.subContractorId = grid.subContractorName;
      grid.addedQuantity.push(data);
      grid.totalQuantity += parseInt(grid.quantity);
      grid.totalSubContractor += 1;
      dispatch({
        type: ADD_QUANTITY,
        payload: grid.addedQuantity,
      });
    },
    handleLayerNoChange(value) {
      dispatch({
        type: LAYER_NO,
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
