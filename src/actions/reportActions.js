import {
  LIST_SUBCONTRACTOR_REPORT,
  LIST_MASTER_REPORT,
  GET_ALL_LAYERS,
  GET_LAYER_WISE_COMPLETED_GRID,
} from "./types";
import store from "../store";
import axios from "axios";
import config from "../config";

export const fetchSCRReport = () => {
  const reports = store.getState().reports;
  return {
    type: LIST_SUBCONTRACTOR_REPORT,
    payload: axios.get(
      config.BASE_URL +
        "/api/Reports/SubContracorReport?startDate=" +
        reports.fromDateSCR +
        "&endDate=" +
        reports.toDateSCR
    ),
  };
};

export const fetchMasterReport = () => {
  const reports = store.getState().reports;

  return {
    type: LIST_MASTER_REPORT,
    payload: axios.get(
      config.BASE_URL +
        "/api/Reports/MasterReport?startDate=" +
        reports.fromDateMaster +
        "&endDate=" +
        reports.toDateMaster
    ),
  };
};

export const layerNoList = () => {
  return {
    type: GET_ALL_LAYERS,
    payload: axios.get(config.BASE_URL + "/api/Layer/LayerNoList"),
  };
};

export const getLayerWiseMap = (layerNums) => {
  let layerList = '';
  layerNums && layerNums != null && layerNums.map(item => layerList += item.value)
  return {
    type: GET_LAYER_WISE_COMPLETED_GRID,
    payload: axios.get(config.BASE_URL + '/api/Reports/GridProgressMap?layerId='+layerList),
  };
};
