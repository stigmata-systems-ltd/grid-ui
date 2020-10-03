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
  getCompletedLayersByGrid,
  fetchGrid,
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
  RESET_DPR_FORM,
  SET_ADD_SUBCONT_ERROR,
  PHOTO_GRID_NO_CHANGE,
  PHOTO_LAYER_NO_CHANGE,
  CG_FILE,
  LP_FILE,
  DPR_FORM_VALIDATION_ERROR,
} from "../../actions/types";
import { getSelectedGrid, getSelectedLayer } from "./dataTransformer";
import { validateDpr } from "./validation";

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialData(reset) {
      dispatch(gridNoList());
      dispatch(subContractorList());
      dispatch(layerNoList());
      if (reset === true) {
        dispatch({ type: RESET_DPR_FORM });
      }
    },
    addCGData() {
      dispatch(addCGData());
      dispatch({ type: RESET_CG_FORM });
    },
    handleCGFileUpload(data) {
      console.log(data.name);
      console.log(data);
      dispatch({
        type: CG_FILE,
        payload: data,
      });
    },
    // handleFileUpload(data) {
    //   dispatch({
    //     type: LP_FILE,
    //     payload: data,
    //   });
    // },
    cancelCGData() {
      dispatch({ type: RESET_CG_FORM });
    },
    updateLayerProgress(isForBilling) {
      const grid = store.getState().grid;
      const validationResult = validateDpr(grid);
      if (validationResult.isValid) {
        dispatch(updateLayerProgress(isForBilling)).then(() => {
          dispatch({ type: RESET_DPR_FORM });
        });
      } else {
        dispatch({
          type: DPR_FORM_VALIDATION_ERROR,
          payload: validationResult.message,
        });
      }
    },
    cancelLayerProgress() {
      dispatch({ type: RESET_DPR_FORM });
    },
    handleGridNoChange(obj) {
      dispatch({
        type: GRID_NO,
        payload: obj,
      });
      dispatch(fetchGrid(obj.value));
      dispatch({
        type: DPR_FORM_VALIDATION_ERROR,
        payload: "",
      });
    },
    handleGridNoChangeDPR(value) {
      dispatch({
        type: DPR_GRID_NO_CHANGE,
        payload: value,
      });
      dispatch(layerNoList());
      const currentLayer = store.getState().grid.layerNo;
      const currentGrid = store.getState().grid.dprGridNum;
      currentLayer !== "" && this.setSingleLayerDetails();
      currentGrid !== "" && dispatch(getCompletedLayersByGrid(value));
      dispatch({
        type: DPR_FORM_VALIDATION_ERROR,
        payload: "",
      });
    },
    handleApprovalChange(value) {
      dispatch({
        type: RFI_APPROVAL,
        payload: value,
      });
      dispatch({
        type: DPR_FORM_VALIDATION_ERROR,
        payload: "",
      });
    },
    handleRFINoChange(value) {
      dispatch({
        type: RFI_NO,
        payload: value,
      });
      dispatch({
        type: DPR_FORM_VALIDATION_ERROR,
        payload: "",
      });
    },
    handleInspectionDateChange(value) {
      dispatch({
        type: RFI_INSPECTION_DATE,
        payload: value,
      });
      dispatch({
        type: DPR_FORM_VALIDATION_ERROR,
        payload: "",
      });
    },
    handleApprovalDateChange(value) {
      dispatch({
        type: RFI_APPROVAL_DATE,
        payload: value,
      });
      dispatch({
        type: DPR_FORM_VALIDATION_ERROR,
        payload: "",
      });
    },
    handleDateOfFilingChange(value) {
      dispatch({
        type: DATE_OF_FILING,
        payload: value,
      });
      dispatch({
        type: DPR_FORM_VALIDATION_ERROR,
        payload: "",
      });
    },
    handleAreaOfLayerChange(value) {
      dispatch({
        type: AREA_OF_LAYER,
        payload: value,
      });
      dispatch({
        type: DPR_FORM_VALIDATION_ERROR,
        payload: "",
      });
    },
    handleFillTypeChange(value) {
      dispatch({
        type: FILL_TYPE,
        payload: value,
      });
      dispatch({
        type: DPR_FORM_VALIDATION_ERROR,
        payload: "",
      });
    },
    handleTopLevelFillMaterialChange(value) {
      dispatch({
        type: FILL_MATERIAL,
        payload: value,
      });
      dispatch({
        type: DPR_FORM_VALIDATION_ERROR,
        payload: "",
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
      if (grid.quantity !== "" && grid.subContractorName.value !== "0") {
        const data = {
          quantity: "",
          subContractorId: "",
          subContractorName: "",
        };
        let changedQty = parseInt(grid.quantity);
        let isNewSubCont = true;
        grid.addedQuantity.map((subCont, index) => {
          if (subCont.subContractorId === grid.subContractorName.value) {
            changedQty = parseInt(grid.quantity) + parseInt(subCont.quantity);
            isNewSubCont = false;
            grid.addedQuantity[index].quantity = changedQty;
          }
        });
        data.quantity = changedQty;
        data.subContractorId = grid.subContractorName.value;
        data.subContractorName = grid.subContractorName.label;
        grid.totalQuantity += parseInt(grid.quantity);
        if (isNewSubCont) {
          grid.totalSubContractor += 1;
          grid.addedQuantity.push(data);
        }

        dispatch({
          type: CHANGE_QUANTITY,
          payload: grid.addedQuantity,
        });
        dispatch({ type: RESET_QUANTITY_FORM });
      } else {
        dispatch({
          type: SET_ADD_SUBCONT_ERROR,
          payload: "Please Enter Both Quantity and Subcontractor",
        });
      }
    },
    deleteQuantity(index) {
      const grid = store.getState().grid;
      const activeQty = grid.addedQuantity[index].quantity;
      grid.addedQuantity.splice(index, 1);
      grid.totalQuantity -= parseInt(activeQty);
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
      this.setSingleLayerDetails();
    },
    setSingleLayerDetails() {
      const grid = store.getState().grid;
      const currentLayer = parseInt(grid.layerNo.value);
      const currentGrid = parseInt(grid.dprGridNum.value);
      // const selectedLayer = getSelectedLayer(grid.LayerNoData, currentLayer);
      // const selectedGrid = getSelectedGrid(grid.gridNoData, currentGrid);
      dispatch(getSingleLayerDetails(currentLayer, currentGrid));
    },
    handleGridNoChangePhoto(value) {
      dispatch({
        type: PHOTO_GRID_NO_CHANGE,
        payload: value,
      });
    },
    handleLayerNoChangePhoto(value) {
      dispatch({
        type: PHOTO_LAYER_NO_CHANGE,
        payload: value,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const grid = state.grid;
  return {
    grid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridDPR);
