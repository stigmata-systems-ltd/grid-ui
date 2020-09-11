import {
  GRID_NO_LIST,
  GRID_LATLANG,
  GRID_ADD,
  LAYER_NO_LIST,
  SUBCONTRACTOR_LIST,
  LAYER_PROGRESS,
  SET_LAYER_DETAILS,
} from './types';
import store from '../store';
import axios from 'axios';
import config from '../config';
export const gridNoList = () => {
  return {
    type: GRID_NO_LIST,
    payload: axios.get(config.BASE_URL + '/api/Grid/GridNoList'),
  };
};

export const layerNoList = () => {
  return {
    type: LAYER_NO_LIST,
    payload: axios.get(config.BASE_URL + '/api/Layer/LayerNoList'),
  };
};
export const subContractorList = () => {
  return {
    type: SUBCONTRACTOR_LIST,
    payload: axios.get(config.BASE_URL + '/api/SubCont/GetSubContractorList'),
  };
};
export const createGrid = () => {
  const grid = store.getState().grid;
  const postData = {
    gridno: grid.gridNumber,
    grid_area: parseInt(grid.gridArea),
    gridGeoLocation: grid.gridLatLong,
    user_id: 1,
  };
  return {
    type: GRID_ADD,
    payload: axios.post(config.BASE_URL + '/api/Grid/AddGrid', postData),
  };
};

export const addCGData = () => {
  const grid = store.getState().grid;
  const postData = {
    grid_id: parseInt(grid.gridNo),
    cG_RFIno: grid.RFINumber,
    cG_inspection_date: grid.rfiInspectionDate,
    cG_approval_date: grid.rfiApprovalDate,
    cG_RFI_status: grid.rfiApproval,
    user_id: 1,
  };
  return {
    type: GRID_ADD,
    payload: axios.post(
      config.BASE_URL + '/api/Grid/CreateCG/' + grid.gridNo,
      postData
    ),
  };
};

export const addLatLang = () => {
  const grid = store.getState().grid;
  let gridLatLong = grid.gridLatLong;
  const latlangObj = {
    latitude: '',
    longitude: '',
  };
  gridLatLong.push(latlangObj);
  return {
    type: GRID_LATLANG,
    payload: gridLatLong,
  };
};

export const updateLayerProgress = () => {
  const grid = store.getState().grid;
  const postData = {
    gridId: parseInt(grid.gridNo),
    layerId: parseInt(grid.layerNo),
    fillingDate: grid.dateOfFiling,
    fillingMaterial: grid.dateOfFiling,
    area_layer: parseInt(grid.areaOfLayer),
    totalQuantity: 20,
    fillType: grid.fillType,
    topFillMaterial: grid.fillMaterial,
    remarks: grid.rfiRemarks,
    user_id: 1,
    isApproved: true,
    cT_RFIno: grid.rfiNoCT,
    cT_inspection_date: grid.rfiInspectionDateCT,
    cT_approval_date: grid.rfiApprovalDateCT,
    cT_RFI_status: grid.rfiCTApprovalStatus,
    lV_RFIno: grid.rfiNoLV,
    lV_inspection_date: grid.rfiInspectionDateLV,
    lV_approval_date: grid.rfiApprovalDateLV,
    lV_RFI_status: grid.rfiLVApprovalStatus,
    layerSubContractor: grid.addedQuantity,
    // layeDocument: [
    //   {
    //     layerDtlsId: 0,
    //     file: 0,
    //     quantity: 0,
    //   },
    // ],
  };

  return {
    type: LAYER_PROGRESS,
    payload: axios.post(config.BASE_URL + '/api/Layer/AddLayer', postData),
  };
};

export const getLayerDetails = () => {
  return {
    type: SET_LAYER_DETAILS,
    payload: axios.get(config.BASE_URL + '/api/Layer/LayerList')
  }
}
