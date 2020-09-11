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
  RESET_CREATE_GRID_FORM,
  SET_LAYER_DETAILS,
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
  gridAdd: { message: "" },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${GRID_NO_LIST}_FULFILLED`:
      return {
        ...state,
        gridNoData: action.payload.data,
      };

    case `${LAYER_NO_LIST}_FULFILLED`:
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
      return {
        ...state,
        gridNumber: action.payload,
      };
    case RFI_NO:
      return {
        ...state,
        RFINumber: action.payload,
      };
    case GRID_AREA:
      return {
        ...state,
        gridArea: action.payload,
      };
    case GRID_NO:
      return {
        ...state,
        gridNo: action.payload,
      };
    case RFI_APPROVAL:
      return {
        ...state,
        rfiApproval: action.payload,
      };
    case RFI_APPROVAL_DATE:
      return {
        ...state,
        rfiApprovalDate: action.payload,
      };
    case RFI_INSPECTION_DATE:
      return {
        ...state,
        rfiInspectionDate: action.payload,
      };
    case GRID_LATLANG:
      return {
        ...state,
        gridLatLong: action.payload,
      };
    case `${GRID_ADD}_FULFILLED`:
      return {
        ...state,
        gridAdd: { message: "Grid Added Successfully" },
        variant: "success",
      };
    case `${GRID_ADD}_REJECTED`:
      return {
        ...state,
        gridAdd: { message: "Error Occurred" },
        variant: "danger",
      };
    case RESET_CREATE_GRID_FORM:
      return {
        ...state,
        gridNumber: "",
        gridLatLong: [],
        gridArea: "",
      };
    case GRID_LATLONG_REMOVE:
      return {
        ...state,
        gridLatLong: action.payload,
      };
    case DATE_OF_FILING:
      return {
        ...state,
        dateOfFiling: action.payload,
      };
    case AREA_OF_LAYER:
      return {
        ...state,
        areaOfLayer: action.payload,
      };
    case FILL_TYPE:
      return {
        ...state,
        fillType: action.payload,
      };
    case FILL_MATERIAL:
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
        layerSubContractor: action.payload,
      };
    case LAYER_NO:
      return {
        ...state,
        layerNo: action.payload,
      };
    case `${SET_LAYER_DETAILS}_PENDING`:
      return {
        ...state,
        isLayerDtlsLoading: true,
        isLayerDtlsError: false,
      };
    case `${SET_LAYER_DETAILS}_REJECTED`:
      return {
        ...state,
        isLayerDtlsLoading: false,
        isLayerDtlsError: true,
      };
    case `${SET_LAYER_DETAILS}_FULFILLED`:
      const layerDtls = action.payload.data[0];
      return {
        ...state,
        tes: true,
        isLayerDtlsLoading: false,
        isLayerDtlsError: false,
        dateOfFiling: layerDtls.fillingDate,
        areaOfLayer: layerDtls.area_layer,
        fillType: layerDtls.fillType,
        //rfiMaterialDescription: layerDtls,
        fillMaterial: layerDtls.topFillMaterial,
        rfiLayerStatus: layerDtls.cT_RFI_status,
        layerSubContractor: layerDtls.layerSubContractor,
        //RFI LV
        rfiNoLV: layerDtls.lV_RFIno,
        rfiInspectionDateLV: layerDtls.lV_inspection_date,
        rfiApprovalDateLV: layerDtls.lV_approval_date,
        rfiLVApprovalStatus: layerDtls.lV_RFI_status,
        //RFI CT
        rfiNoCT: layerDtls.cT_RFIno,
        rfiInspectionDateCT: layerDtls.cT_inspection_date,
        rfiApprovalDateCT: layerDtls.cT_approval_date,
        rfiCTApprovalStatus: layerDtls.cT_RFI_status,

        rfiRemarks: layerDtls.remarks,
      };
    default:
      return state;
  }
}
