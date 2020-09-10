
import {
  GRID_NO_LIST,
  LAYER_NO_LIST,
  GRID_NUMBER,
  GRID_AREA,
  GRID_LAT,
  GRID_LANG,
  GRID_LATLANG,
  GRID_ADD,
  GRID_NO,
  GRID_LATLONG_REMOVE,
  RFI_APPROVAL,
  RFI_NO,
  RFI_APPROVAL_DATE,
  RFI_INSPECTION_DATE,
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
  SUBCONTRACTOR_LIST,
  SUBCONTRACTOR_CHANGE,
  QUANTITY_CHANGE,
  CHANGE_QUANTITY,
  LAYER_NO,
  RESET_QUANTITY_FORM,
} from "../actions/types";

const initialState = {
  gridNoData: [],
  gridLatLong: [],
  subContractorList: [],
  approvalOptions: [
    { id: "New", gridName: "New" },
    { id: "Completed", gridName: "Completed" },
  ],
  layerNoList: [],
  quantitySelected: [],
  addedQuantity: [],
  totalQuantity: 0,
  totalSubContractor: 0,
  quantity: "",
  subContractorName: "0",
  isSubContractorEdit: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${GRID_NO_LIST}_FULFILLED`:
      console.log(`GRID NO LIST : ${action.payload}`);
      return {
        ...state,
        gridNoData: action.payload.data,
      };

    case `${LAYER_NO_LIST}_FULFILLED`:
      console.log(`LAYER NO LIST : ${action.payload}`);
      const layerNoList = [];
      action.payload.data.map((a) => {
        const data = {
          id: "",
          gridName: "",
        };
        data.id = a.id;
        data.gridName = a.layerName;
        layerNoList.push(data);
      });
      return {
        ...state,
        LayerNoData: layerNoList,
      };
    case GRID_NUMBER:
      console.log(action.payload);
      return {
        ...state,
        gridNumber: action.payload,
      };
    case RFI_NO:
      console.log(action.payload);
      return {
        ...state,
        RFINumber: action.payload,
      };
    case GRID_AREA:
      console.log(action.payload);
      return {
        ...state,
        gridArea: action.payload,
      };
    case GRID_NO:
      console.log(action.payload);
      return {
        ...state,
        gridNo: action.payload,
      };
    case RFI_APPROVAL:
      console.log(action.payload);
      return {
        ...state,
        rfiApproval: action.payload,
      };
    case RFI_APPROVAL_DATE:
      console.log(action.payload);
      return {
        ...state,
        rfiApprovalDate: action.payload,
      };
    case RFI_INSPECTION_DATE:
      console.log(action.payload);
      return {
        ...state,
        rfiInspectionDate: action.payload,
      };
    case GRID_LATLANG:
      console.log(`In Grid latlang reducer: ${action.payload}`);
      return {
        ...state,
        gridLatLong: action.payload,
      };
    case `${GRID_ADD}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        gridAdd: action.payload,
      };
    case GRID_LATLONG_REMOVE:
      console.log(`In Grid latlang remove reducer: ${action.payload}`);
      return {
        ...state,
        gridLatLong: action.payload,
      };
    case DATE_OF_FILING:
      console.log(`In Grid date of filing reducer: ${action.payload}`);
      return {
        ...state,
        dateOfFiling: action.payload,
      };
    case AREA_OF_LAYER:
      console.log(`In Grid area of layer reducer: ${action.payload}`);
      return {
        ...state,
        areaOfLayer: action.payload,
      };
    case FILL_TYPE:
      console.log(`In Grid area of layer reducer: ${action.payload}`);
      return {
        ...state,
        fillType: action.payload,
      };
    case FILL_MATERIAL:
      console.log(`In Grid area of layer reducer: ${action.payload}`);
      return {
        ...state,
        fillMaterial: action.payload,
      };
    case RFI_NO_LV:
      return {
        ...state,
        rfiNoLV: action.payload,
      };
    case RFI_NO_CT:
      return {
        ...state,
        rfiNoCT: action.payload,
      };
    case RFI_INSPECTIONDATE_LV:
      return {
        ...state,
        rfiInspectionDateLV: action.payload,
      };
    case RFI_INSPECTIONDATE_CT:
      return {
        ...state,
        rfiInspectionDateCT: action.payload,
      };
    case RFI_APROVALDATE_LV:
      return {
        ...state,
        rfiApprovalDateLV: action.payload,
      };
    case RFI_APROVALDATE_CT:
      return {
        ...state,
        rfiApprovalDateCT: action.payload,
      };
    case RFI_LV_APPROVAL_STATUS:
      return {
        ...state,
        rfiLVApprovalStatus: action.payload,
      };
    case RFI_CT_APPROVAL_STATUS:
      return {
        ...state,
        rfiCTApprovalStatus: action.payload,
      };
    case RFI_MATERIAL_DESCRIPTION:
      return {
        ...state,
        rfiMaterialDescription: action.payload,
      };
    case RFI_REMARKS:
      return {
        ...state,
        rfiRemarks: action.payload,
      };
    case RFI_FILE_UPLOAD:
      return {
        ...state,
        rfiFileUpload: action.payload,
      };
    case RFI_LAYER_STATUS:
      return {
        ...state,
        rfiLayerStatus: action.payload,
      };
    case `${SUBCONTRACTOR_LIST}_FULFILLED`:
      const subContractorList = [];
      action.payload.data.map((a) => {
        const data = {
          id: "",
          gridName: "",
        };
        data.id = a.subContrtactorId;
        data.gridName = a.name;
        subContractorList.push(data);
      });
      return {
        ...state,
        subContractorList,
      };
    case SUBCONTRACTOR_CHANGE:
      return {
        ...state,
        subContractorName: action.payload,
      };
    case QUANTITY_CHANGE:
      return {
        ...state,
        quantity: action.payload,
      };
    case RESET_QUANTITY_FORM:
      return {
        ...state,
        quantity: "",
        subContractorName: "0",
      };
    case CHANGE_QUANTITY:
      return {
        ...state,
        addedQuantity: action.payload,
      };
    case LAYER_NO:
      return {
        ...state,
        layerNo: action.payload,
      };

    default:
      return state;
  }
}
