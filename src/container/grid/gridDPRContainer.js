import { connect } from "react-redux";
import GridDPR from "../../pages/gridDPR/GridDPR";
import store from "../../store";
import {
  gridNoList,
  addCGData,
  layerNoList,
  subContractorList,
  updateLayerProgress,
  getSingleLayerDetails,
} from "../../actions/gridActions";
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
  CHANGE_QUANTITY,
  RESET_QUANTITY_FORM,
  LAYER_NO,
  RESET_CG_FORM,
  DPR_GRID_NO_CHANGE,
} from "../../actions/types";
import { getSelectedGrid, getSelectedLayer } from "./dataTransformer";

const mapDispatchToProps = (dispatch) => {
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
      dispatch({ type: RESET_CG_FORM });
    },
    updateLayerProgress() {
      dispatch(updateLayerProgress());
    },
    handleGridNoChange(value) {
      dispatch({
        type: GRID_NO,
        payload: value,
      });
    },
    handleGridNoChangeDPR(value) {
      dispatch({
        type: DPR_GRID_NO_CHANGE,
        payload: value,
      });
      const currentLayer = store.getState().grid.layerNo;
      currentLayer !== "" && this.setSingleLayerDetails();
    },
    handleApprovalChange(value) {
      dispatch({
        type: RFI_APPROVAL,
        payload: value,
      });
    },
    handleRFINoChange(value) {
      dispatch({
        type: RFI_NO,
        payload: value,
      });
    },
    handleInspectionDateChange(value) {
      dispatch({
        type: RFI_INSPECTION_DATE,
        payload: value,
      });
    },
    handleApprovalDateChange(value) {
      dispatch({
        type: RFI_APPROVAL_DATE,
        payload: value,
      });
    },
    handleDateOfFilingChange(value) {
      dispatch({
        type: DATE_OF_FILING,
        payload: value,
      });
    },
    handleAreaOfLayerChange(value) {
      dispatch({
        type: AREA_OF_LAYER,
        payload: value,
      });
    },
    handleFillTypeChange(value) {
      dispatch({
        type: FILL_TYPE,
        payload: value,
      });
    },
    handleTopLevelFillMaterialChange(value) {
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
      const data = { quantity: "", subContractorId: "" };
      let changedQty = parseInt(grid.quantity);
      let isNewSubCont = true;
      grid.addedQuantity.map((subCont, index) => {
        if (subCont.subContractorId === grid.subContractorName) {
          changedQty = parseInt(grid.quantity) + parseInt(subCont.quantity);
          isNewSubCont = false;
          grid.addedQuantity[index].quantity = changedQty;
        }
      });
      data.quantity = changedQty;
      data.subContractorId = grid.subContractorName;
      grid.totalQuantity += parseInt(grid.quantity);
      grid.totalSubContractor += 1;
      isNewSubCont && grid.addedQuantity.push(data);

      dispatch({
        type: CHANGE_QUANTITY,
        payload: grid.addedQuantity,
      });
      dispatch({ type: RESET_QUANTITY_FORM });
    },
    deleteQuantity(index) {
      const grid = store.getState().grid;
      grid.addedQuantity.splice(index, 1);
      grid.totalQuantity -= parseInt(grid.quantity);
      grid.totalSubContractor -= 1;
      dispatch({
        type: CHANGE_QUANTITY,
        payload: grid.addedQuantity,
      });
    },
    handleLayerNoChange(value) {
      dispatch({
        type: LAYER_NO,
        payload: value,
      });
      this.setSingleLayerDetails()
    },
    setSingleLayerDetails() {
      const grid = store.getState().grid;
      const currentLayer = parseInt(grid.layerNo);
      const currentGrid = parseInt(grid.gridNo);
      const selectedLayer = getSelectedLayer(grid.LayerNoData, currentLayer);
      const selectedGrid = getSelectedGrid(grid.gridNoData, currentGrid);
      dispatch(getSingleLayerDetails(selectedLayer, selectedGrid));
    }
  };
};

const mapStateToProps = (state) => {
  const grid = state.grid;
  return {
    grid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridDPR);
