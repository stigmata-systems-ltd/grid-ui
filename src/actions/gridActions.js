import {
  GRID_NO_LIST,
  GRID_LATLANG,
  GRID_ADD,
  LAYER_NO_LIST,
  SUBCONTRACTOR_LIST,
  LAYER_PROGRESS,
  SET_LAYER_DETAILS,
  ADD_CG,
  DELETE_GRID,
  GRID_DETAILS,
  EDIT_GRID,
  GRID_LIST,
  EDIT_GRID_DETAILS,
  LAYER_DETAILS,
  SET_COMPLETED_LAYERS_BY_GRID,
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

export const gridList = () => {
  return {
    type: GRID_LIST,
    payload: axios.get(config.BASE_URL + '/api/Grid/GridList'),
  };
};

export const fetchGrid = gridNo => {
  return {
    type: GRID_DETAILS,
    payload: axios.get(config.BASE_URL + '/api/Grid/GridList?gridId=' + gridNo),
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
    marker_latitide: 10,
    marker_longitude: 10,
  };
  return {
    type: GRID_ADD,
    payload: axios.post(config.BASE_URL + '/api/Grid/AddGrid', postData),
  };
};

export const editGrid = () => {
  const grid = store.getState().grid;
  const postData = {
    gridno: grid.gridNumber,
    grid_area: parseInt(grid.gridArea),
    gridGeoLocation: grid.gridLatLong,
    user_id: 1,
    marker_latitide: 10,
    marker_longitude: 10,
  };
  return {
    type: EDIT_GRID,
    payload: axios.put(
      config.BASE_URL + '/api/Grid/UpdateGrid/' + grid.gridId,
      postData
    ),
  };
};

export const deleteGrid = i => {
  const grid = store.getState().grid;
  console.log(`Selected Grid ID: ${grid.listGrid[i].gridId}`);
  const id = grid.listGrid[i].gridId;
  return {
    type: DELETE_GRID,
    payload: axios.delete(config.BASE_URL + '/api/Grid/DeleteGrid/' + id),
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
    type: ADD_CG,
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
    gridId: parseInt(grid.dprGridNum),
    layerId: parseInt(grid.layerNo),
    fillingDate: grid.dateOfFiling,
    fillingMaterial: grid.dateOfFiling,
    area_layer: parseInt(grid.areaOfLayer),
    status: grid.rfiLayerStatus,
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

export const getSingleLayerDetails = (selectedLayer, selectedGrid) => {
  return {
    type: SET_LAYER_DETAILS,
    payload: axios.get(
      config.BASE_URL +
        '/api/Layer/LayerList?layerNo=' +
        selectedLayer +
        '&gridNo=' +
        selectedGrid
    ),
  };
};
export const editGridDetails = i => {
  const grid = store.getState().grid;
  console.log(`Selected SCR ID: ${grid.listGridDetails[i]}`);
  const selectedGrid = grid.listGridDetails[i];

  return {
    type: EDIT_GRID_DETAILS,
    payload: selectedGrid,
  };
};
export const getCompletedLayersByGrid = gridId => {
  return {
    type: SET_COMPLETED_LAYERS_BY_GRID,
    payload: axios.get(
      config.BASE_URL + '/api/Grid/LayerCmplCountByGrid?id=' + gridId
    ),
  };
};
export const fetchLayerDetails = i => {
  const grid = store.getState().grid;
  const gridNo = grid.listGridDetails[i].gridno;

  return {
    type: LAYER_DETAILS,
    payload: axios.get(
      config.BASE_URL + '/api/Layer/LayerList?gridNo=' + gridNo
    ),
  };
};
